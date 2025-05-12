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

  const fetchCartProducts = async () => {
    try {
      const productsQuery = collection(database, 'shoppingCart');
      const snapshot = await getDocs(productsQuery);
      const products = snapshot.docs.map((doc) => ({
        firestoreId: doc.id,
        ...doc.data(),
      }));
      setCartProducts(products);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const addProductToShoppingCart = async (product) => {
    if (!product.id) return;

    try {
      const cartQuery = query(
        collection(database, 'shoppingCart'),
        where('productId', '==', product.id)
      );
      const querySnapshot = await getDocs(cartQuery);

      if (!querySnapshot.empty) {
        const existingDoc = querySnapshot.docs[0];
        await updateDoc(existingDoc.ref, {
          quantity: (existingDoc.data().quantity || 0) + 1,
        });
      } else {
        await addDoc(collection(database, 'shoppingCart'), {
          productId: product.id,
          ...product,
          quantity: 1,
        });
      }
      await fetchCartProducts();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeProductFromCart = async (firestoreId) => {
    if (!firestoreId) return;

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
    }
  };

  const decreaseProductQuantity = async (product) => {
    if (!product.id) return;

    try {
      const cartQuery = query(
        collection(database, 'shoppingCart'),
        where('productId', '==', product.id)
      );

      const querySnapshot = await getDocs(cartQuery);
      const existingDoc = querySnapshot.docs[0];
      const productQuantity = existingDoc.data().quantity;

      if (productQuantity === 1) {
        return false;
      }

      await updateDoc(existingDoc.ref, {
        quantity: productQuantity - 1,
      });

      await fetchCartProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const subTotal = cartProducts.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  const total = subTotal + 50 + 29;

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToShoppingCart,
        removeProductFromCart,
        decreaseProductQuantity,
        subTotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
