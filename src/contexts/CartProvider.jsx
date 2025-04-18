import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { database } from '../config/firebase';

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCartProducts = async () => {
    setIsLoading(true);
    try {
      const productsQuery = collection(database, 'shoppingCart');
      const snapshot = await getDocs(productsQuery);
      const products = snapshot.docs.map((doc) => ({
        firestoreId: doc.id, // The Firestore document ID
        ...doc.data(),
      }));
      setCartProducts(products);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const addProductToShoppingCart = async (product) => {
    if (!product.id) return;

    setIsLoading(true);
    try {
      // Check if product already exists in cart
      const cartQuery = query(
        collection(database, 'shoppingCart'),
        where('productId', '==', product.id)
      );
      const querySnapshot = await getDocs(cartQuery);

      if (!querySnapshot.empty) {
        // Product exists - update quantity
        const existingDoc = querySnapshot.docs[0];
        await updateDoc(existingDoc.ref, {
          quantity: (existingDoc.data().quantity || 0) + 1,
        });
      } else {
        // Product doesn't exist - add new
        await addDoc(collection(database, 'shoppingCart'), {
          productId: product.id,
          ...product,
          quantity: 1,
        });
      }
      await fetchCartProducts(); // Refresh cart
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeProductFromCart = async (firestoreId) => {
    if (!firestoreId) return;

    setIsLoading(true);
    try {
      // Delete from Firestore
      await deleteDoc(doc(database, 'shoppingCart', firestoreId));

      // Optimistically update local state
      setCartProducts((prev) =>
        prev.filter((item) => item.firestoreId !== firestoreId)
      );
    } catch (error) {
      console.error('Error removing from cart:', error);
      // If Firestore fails, refresh from server
      await fetchCartProducts();
    } finally {
      setIsLoading(false);
    }
  };
  const updateProductQuantity = async (firestoreId, newQuantity) => {
    if (newQuantity < 1) {
      await removeProductFromCart(firestoreId);
      return;
    }

    setIsLoading(true);
    try {
      await updateDoc(doc(database, 'shoppingCart', firestoreId), {
        quantity: newQuantity,
      });
      await fetchCartProducts(); // Refresh cart
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        isLoading,
        addProductToShoppingCart,
        removeProductFromCart,
        updateProductQuantity,
        refreshCart: fetchCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
