import { useState } from 'react';

function Filters({ openSideFilters }) {
  const filters = [
    { filterName: 'Price' },
    {
      filterName: 'Brand',
      options: [
        'Apple',
        'Samsung',
        'Xiaomi',
        'OPPO',
        'Paco',
        'Nokia',
        'Motorola',
      ],
    },
    {
      filterName: 'Built-in memory',
      options: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB'],
    },
    {
      filterName: 'Protection class',
      options: ['IP67', 'IP68', 'IPX4', 'IPX5', 'IPX6'],
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
      className={`w-96 flex-col gap-6 lg:flex ${openSideFilters ? 'flex' : 'hidden'}`}
    >
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
    </aside>
  );
}

export default Filters;
