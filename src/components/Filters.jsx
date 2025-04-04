import { useState } from 'react';

function Filters({ openSideFilters, setOpenSideFilters }) {
  const filters = [
    { filterName: 'Price' },
    {
      filterName: 'Brand',
      options: [
        'Apple',
        'Samsung',
        'Xiaomi',
        'Google',
        'Huawei',
        'Poco',
        'Realme',
      ],
    },
    {
      filterName: 'Built-in memory',
      options: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB'],
    },
    {
      filterName: 'Screen diagonal',
      options: ['4.7"', '5.5"', '6.1"', '6.5"', '6.8"', '7.2"+'],
    },
    {
      filterName: 'Battery capacity',
      options: [
        '< 3000mAh',
        '3000-4000mAh',
        '4000-5000mAh',
        '5000-6000mAh',
        '6000mAh+',
      ],
    },
  ];

  const [openFilters, setOpenFilters] = useState({});

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.0001 20.7498C15.801 20.7508 15.61 20.6715 15.4701 20.5298L7.47007 12.5298C7.17762 12.237 7.17762 11.7627 7.47007 11.4698L15.4701 3.46985C15.7656 3.19449 16.2261 3.20261 16.5117 3.48823C16.7973 3.77384 16.8054 4.23434 16.5301 4.52985L9.06007 11.9998L16.5301 19.4698C16.8225 19.7627 16.8225 20.237 16.5301 20.5298C16.3902 20.6715 16.1991 20.7508 16.0001 20.7498Z"
            fill="black"
          />
        </svg>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 15L12 9L18 15" stroke="black" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 9L12 15L6 9" stroke="black" strokeWidth="2" />
              </svg>
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
