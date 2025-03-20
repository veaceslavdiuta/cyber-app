import { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../config/firebase';
import { useParams } from 'react-router-dom';

function Catalog() {
  const { category } = useParams();
  const [devices, setDevices] = useState([]);
  const [openSideFilters, setOpenSideFilters] = useState(false);

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
      } catch (error) {
        console.error('Error fetching devices', error);
      }
    };

    fetchDevices();
  }, [category]);

  return (
    <main className="container mx-auto w-full max-w-screen-xl px-4 pb-20">
      <Breadcrumbs />
      <div className="flex gap-8">
        <Filters
          openSideFilters={openSideFilters}
          setOpenSideFilters={setOpenSideFilters}
        />

        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <h4 className="order-3 font-sfPro text-base font-medium text-[#6C6C6C] lg:order-1">
              Selected Products: <span className="text-xl text-black">85</span>
            </h4>
            <div className="flex justify-center gap-4 lg:order-2">
              <button
                onClick={() => setOpenSideFilters(true)}
                className="flex w-full max-w-64 justify-between rounded-lg border border-[#D4D4D4] px-4 py-2 font-sfPro text-sm font-medium leading-6 text-black lg:hidden lg:w-64"
              >
                Filters
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 19H14M14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19M10 19H4M20 12L8 12M8 12C8 10.8954 7.1046 10 6 10C4.8954 10 4 10.8954 4 12C4 13.1046 4.8954 14 6 14C7.1046 14 8 13.1046 8 12ZM16 5L4 5M16 5C16 6.1046 16.8954 7 18 7C19.1046 7 20 6.1046 20 5C20 3.8954 19.1046 3 18 3C16.8954 3 16 3.8954 16 5Z"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="flex w-full max-w-64 justify-between rounded-lg border border-[#D4D4D4] px-4 py-2 lg:w-64">
                <p className="font-sfPro text-sm font-medium leading-6 text-black">
                  By rating
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M6 9L12 15L18 9" stroke="#9F9F9F" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {devices.map((device) => (
              <ProductCard key={device.id} device={device} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Catalog;
