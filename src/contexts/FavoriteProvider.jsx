import { useEffect, useState } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from 'firebase/firestore';
import { database } from '../config/firebase';

export function FavoriteProvider({ children }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const isProductFavorite = (id) => {
    return favoriteProducts.some((fav) => fav.id === id);
  };

  const fetchFavoriteProducts = async () => {
    try {
      const productsQuery = collection(database, 'favorite');
      const snapshot = await getDocs(productsQuery);
      const products = snapshot.docs.map((doc) => ({
        firestoreId: doc.id,
        ...doc.data(),
      }));
      setFavoriteProducts(products);
    } catch (error) {
      console.log('Error to fetch favorite products:', error);
    }
  };

  useEffect(() => {
    fetchFavoriteProducts();
  }, []);

  const addProductToFavorite = async (product) => {
    try {
      const isAlreadyFavorite = favoriteProducts.some(
        (fav) => fav.id === product.id
      );

      if (isAlreadyFavorite) {
        return;
      } else {
        await addDoc(collection(database, 'favorite'), {
          ...product,
          favorite: true,
        });
      }

      await fetchFavoriteProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductFromFavorite = async (firestoreId) => {
    try {
      await deleteDoc(doc(database, 'favorite', firestoreId));

      setFavoriteProducts((prev) =>
        prev.filter((item) => item.firestoreId !== firestoreId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavoriteProduct = async (product) => {
    const isFavorite = isProductFavorite(product.id);
    const firestoreFavorite = favoriteProducts.find(
      (fav) => fav.id === product.id
    );

    if (isFavorite && firestoreFavorite) {
      await deleteProductFromFavorite(firestoreFavorite.firestoreId);
    } else {
      await addProductToFavorite(product);
    }
  };
  return (
    <FavoriteContext.Provider
      value={{
        favoriteProducts,
        isProductFavorite,
        addProductToFavorite,
        deleteProductFromFavorite,
        handleFavoriteProduct,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
