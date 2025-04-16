import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import SortAndFiltersControl from '../components/SortAndFiltersControl';
import {
  fetchDevices,
  getDevicesByFilters,
} from '../services/devices.services';

function Catalog() {
  const { category } = useParams();
  const [devices, setDevices] = useState([]);
  const [allDevices, setAllDevices] = useState([]);
  const [openSideFilters, setOpenSideFilters] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortValue, setSortValue] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDevices(category);
      setAllDevices(data);
      setDevices(data);
      setCount(data.length);
      setSelectedFilters({});
    };

    getData();
  }, [category]);

  useEffect(() => {
    const filtered = getDevicesByFilters(
      allDevices,
      selectedFilters,
      category,
      sortValue
    );
    setDevices(filtered);
    setCount(filtered.length);
  }, [allDevices, selectedFilters, category, sortValue]);

  return (
    <main className="w-full">
      <Breadcrumbs />
      <section className="container mx-auto flex w-full max-w-screen-xl gap-8 px-4 pb-20">
        <Filters
          category={category}
          allDevices={allDevices}
          openSideFilters={openSideFilters}
          setOpenSideFilters={setOpenSideFilters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <div className="flex w-full flex-col gap-6">
          <SortAndFiltersControl
            count={count}
            setOpenSideFilters={setOpenSideFilters}
            sortValue={sortValue}
            setSortValue={setSortValue}
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {devices.length > 0 ? (
              devices.map((device) => (
                <ProductCard key={device.id} device={device} />
              ))
            ) : (
              <div>No devices found</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
