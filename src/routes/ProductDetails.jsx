import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../config/firebase';
import Breadcrumbs from '../components/Breadcrumbs';
import DeviceMainInfo from '../components/DeviceMainInfo';
import DeviceReviews from '../components/DeviceReviews';
import DeviceDetails from '../components/DeviceDetails';

function ProductDetails() {
  const [device, setDevice] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchDeviceByName = async () => {
      try {
        const deviceCollection = query(
          collection(database, 'devices'),
          where('name', '==', name) // Query by name
        );
        const deviceQuery = await getDocs(deviceCollection);
        const deviceData = deviceQuery.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (deviceData.length > 0) {
          setDevice(deviceData[0]);
          console.log(deviceData);
          // Assuming one device matches the name
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
          <DeviceReviews />
          <div className="bg-blue-300">Related Products</div>
        </>
      )}
    </main>
  );
}

export default ProductDetails;
