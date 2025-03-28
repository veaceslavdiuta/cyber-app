import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../config/firebase';
import Breadcrumbs from '../components/Breadcrumbs';
import DeviceMainInfo from '../components/DeviceMainInfo';
import DeviceReviews from '../components/DeviceReviews';
import DeviceDetails from '../components/DeviceDetails';
import ProductCard from '../components/ProductCard';

function ProductDetails() {
  const [device, setDevice] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchDeviceByName = async () => {
      try {
        const deviceCollection = query(
          collection(database, 'devices'),
          where('model', '==', name)
        );
        const deviceQuery = await getDocs(deviceCollection);
        const deviceData = deviceQuery.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (deviceData.length > 0) {
          setDevice(deviceData[0]);
          console.log(deviceData);
        } else {
          console.log('No device found with the given name');
        }
      } catch (error) {
        console.log('Error fetching device', error);
      }
    };

    fetchDeviceByName();
  }, [name]);

  return (
    <main className="w-full">
      <Breadcrumbs />

      {device && (
        <>
          <DeviceMainInfo device={device} />
          <DeviceDetails />
          {/* <DeviceReviews /> */}
          <div className="container mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-20">
            <h4 className="font-sfPro text-2xl font-medium leading-8">
              Related Products
            </h4>
            <div className="flex flex-wrap justify-between gap-4">
              <ProductCard device={device} />
              <ProductCard device={device} />
              <ProductCard device={device} />
              <ProductCard device={device} />
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductDetails;
