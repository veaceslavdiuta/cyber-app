import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../config/firebase';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import SortAndFiltersControl from '../components/SortAndFiltersControl';

function Catalog() {
  const { category } = useParams();
  const [devices, setDevices] = useState(null);
  const [openSideFilters, setOpenSideFilters] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        let devicesQuery;
        if (category) {
          devicesQuery = query(
            collection(database, 'devices'),
            where('category', '==', category)
          );
        } else {
          devicesQuery = query(collection(database, 'devices'));
        }
        const querySnapshot = await getDocs(devicesQuery);
        const deviceList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDevices(deviceList);
        setCount(deviceList.length);
      } catch (error) {
        console.error('Error fetching devices', error);
      }
    };

    fetchDevices();
  }, [category]);

  return (
    <main className="w-full">
      <Breadcrumbs />
      <section className="container mx-auto flex w-full max-w-screen-xl gap-8 px-4 pb-20">
        <Filters
          openSideFilters={openSideFilters}
          setOpenSideFilters={setOpenSideFilters}
        />

        <div className="flex w-full flex-col gap-6">
          <SortAndFiltersControl
            setOpenSideFilters={setOpenSideFilters}
            count={count}
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {devices ? (
              devices.map((device) => (
                <ProductCard key={device.id} device={device} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
