import { useContext } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';
import ProductCard from '../components/ProductCard';
import FavoriteProduct from '../components/FavoriteProduct';

function Favorite() {
  const { favoriteProducts } = useContext(FavoriteContext);
  return (
    <main className="w-full">
      <section className="container mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-12 px-4 py-20">
        <h3 className="font-sfPro text-2xl font-semibold leading-6">
          Favorite Items
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {favoriteProducts.map((device) => (
            <FavoriteProduct device={device} key={device.firestoreId} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Favorite;
