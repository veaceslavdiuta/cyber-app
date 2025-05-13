import { useState } from 'react';
import { getFilterByCategory } from '../config/filterConfig';
import { IoIosArrowBack } from 'react-icons/io';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Filters({
  openSideFilters,
  setOpenSideFilters,
  category,
  allDevices,
  selectedFilters,
  setSelectedFilters,
}) {
  const [openFilters, setOpenFilters] = useState({});
  const filters = getFilterByCategory(category, allDevices);

  const handleCheckboxChange = (e, filterName) => {
    const { value, checked } = e.target;

    setSelectedFilters((prevFilters) => {
      const prevValues = prevFilters[filterName] || [];

      if (checked) {
        return {
          ...prevFilters,
          [filterName]: [...prevValues, value],
        };
      } else {
        return {
          ...prevFilters,
          [filterName]: prevValues.filter((val) => val !== value),
        };
      }
    });
  };

  const toggleFilter = (filter) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <aside
      className={`flex flex-col ${openSideFilters ? 'w-full opacity-100 md:w-1/2' : 'w-0 opacity-0'} absolute left-0 top-20 z-10 gap-6 bg-white p-4 duration-300 lg:static lg:w-80 lg:p-0 lg:opacity-100`}
    >
      <button
        className="flex items-center gap-4 lg:hidden"
        onClick={() => setOpenSideFilters(false)}
      >
        <IoIosArrowBack className="text-[28px]" />
        <h4 className="font-sfPro text-2xl font-medium leading-8">Filters</h4>
      </button>
      {filters.map((filter, index) => (
        <div key={index} className="flex flex-col gap-3">
          <div
            className="flex cursor-pointer justify-between border-b-2 py-3"
            onClick={() => toggleFilter(filter.filterName)}
          >
            <h5 className="font-sfPro text-lg font-medium leading-7 text-black">
              {filter.filterName}
            </h5>
            {openFilters[filter.filterName] ? (
              <MdKeyboardArrowUp className="text-2xl" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl" />
            )}
          </div>
          {openFilters[filter.filterName] && (
            <div className="flex flex-col gap-2">
              {filter.filterName === 'Price' ? (
                <div className="flex justify-between gap-8">
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-sfPro text-sm font-medium leading-6 text-[#A7A7A7]"
                      htmlFor="from"
                    >
                      From
                    </label>
                    <input
                      className="w-full rounded-sm border p-2 font-sfPro text-sm font-normal leading-6 text-black outline-none"
                      type="number"
                      name="from"
                      value={selectedFilters.priceFrom || ''}
                      onChange={(e) =>
                        setSelectedFilters((prev) => ({
                          ...prev,
                          priceFrom: e.target.value
                            ? parseFloat(e.target.value)
                            : 0,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-sfPro text-sm font-medium leading-6 text-[#A7A7A7]"
                      htmlFor="to"
                    >
                      To
                    </label>
                    <input
                      className="w-full rounded-sm border p-2 font-sfPro text-sm font-normal leading-6 text-black outline-none"
                      type="number"
                      name="to"
                      value={selectedFilters.priceTo || ''}
                      onChange={(e) =>
                        setSelectedFilters((prev) => ({
                          ...prev,
                          priceTo: e.target.value
                            ? parseFloat(e.target.value)
                            : Infinity,
                        }))
                      }
                    />
                  </div>
                </div>
              ) : (
                filter.options?.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 font-sfPro text-sm font-normal leading-6"
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-black"
                      checked={
                        selectedFilters[filter.filterName]?.includes(item) ||
                        false
                      }
                      value={item}
                      onChange={(e) =>
                        handleCheckboxChange(e, filter.filterName)
                      }
                    />
                    {item}
                  </label>
                ))
              )}
            </div>
          )}
        </div>
      ))}
      <button className="font-sm w-full self-center rounded-lg border border-black bg-black py-3 font-sfPro font-medium text-white sm:max-w-96 lg:hidden">
        Apply
      </button>
    </aside>
  );
}

export default Filters;
