import { useState } from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';

function SortAndFiltersControl({
  setOpenSideFilters,
  count,
  sortValue,
  setSortValue,
}) {
  const [openSort, setOpenSort] = useState(false);

  const handleSortValue = (value) => {
    setSortValue(value);
    setOpenSort(!openSort);
  };

  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row">
      <h4 className="order-3 font-sfPro text-base font-medium text-[#6C6C6C] lg:order-1">
        Selected Products: <span className="text-xl text-black">{count}</span>
      </h4>
      <div className="flex justify-center gap-4 lg:order-2">
        <button
          onClick={() => setOpenSideFilters(true)}
          className="flex w-full max-w-64 justify-between rounded-lg border border-[#D4D4D4] px-4 py-2 font-sfPro text-sm font-medium leading-6 text-black lg:hidden lg:w-64"
        >
          Filters
          <HiAdjustmentsHorizontal className="text-2xl text-[#9F9F9F]" />
        </button>
        <ul className="relative flex w-full max-w-64 flex-col justify-between rounded-lg border border-[#D4D4D4] bg-white px-4 py-2 lg:w-64">
          <button
            onClick={() => setOpenSort(!openSort)}
            className="flex w-full justify-between font-sfPro text-sm font-medium leading-6 text-black"
          >
            {sortValue || 'Sort by'}
            <IoIosArrowDown className="text-2xl text-[#9F9F9F]" />
          </button>
          {openSort && (
            <div className="absolute right-0 top-10 w-full rounded-lg border border-[#D4D4D4] bg-white lg:w-64">
              <li
                onClick={() => handleSortValue('Low To High')}
                className="cursor-pointer px-4 py-1 font-sfPro text-sm font-medium leading-6 text-black hover:bg-[#D4D4D4]"
              >
                Price: Low to High
              </li>
              <li
                onClick={() => handleSortValue('High To Low')}
                className="cursor-pointer px-4 py-1 font-sfPro text-sm font-medium leading-6 text-black hover:bg-[#D4D4D4]"
              >
                Price: High to Low
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SortAndFiltersControl;
