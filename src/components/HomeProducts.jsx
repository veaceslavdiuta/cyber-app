import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchNewArrivalsDevices } from '../services/devices.services';

function HomeProducts() {
  const [selectProducts, setSelectProducts] = useState('newArrivals');
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const getNewArrivals = async () => {
      const newArrivalsProducts = await fetchNewArrivalsDevices();
      setDevices(newArrivalsProducts);
    };

    getNewArrivals();
  }, []);

  return (
    <section className="w-full">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14">
        <ul className="flex justify-center gap-8 md:justify-start">
          <li
            onClick={() => setSelectProducts('newArrivals')}
            className={`border-b-2 ${selectProducts === 'newArrivals' ? 'border-b-2 border-black' : 'border-none text-[#8B8B8B]'} cursor-pointer font-sfPro text-sm font-medium leading-8 sm:text-lg`}
          >
            New Arrival
          </li>
          <li
            onClick={() => setSelectProducts('bestseller')}
            className={`border-b-2 ${selectProducts === 'bestseller' ? 'border-b-2 border-black' : 'border-none text-[#8B8B8B]'} cursor-pointer font-sfPro text-sm font-medium leading-8 sm:text-lg`}
          >
            Bestseller
          </li>
          <li
            onClick={() => setSelectProducts('featuredProducts')}
            className={`border-b-2 ${selectProducts === 'featuredProducts' ? 'border-b-2 border-black' : 'border-none text-[#8B8B8B]'} cursor-pointer font-sfPro text-sm font-medium leading-8 sm:text-lg`}
          >
            Featured Products
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {devices.map((device) => (
            <ProductCard device={device} key={device.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;
