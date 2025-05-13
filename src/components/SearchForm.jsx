import { CiSearch } from 'react-icons/ci';

function SearchForm() {
  return (
    <form className="flex w-full max-w-[23rem] gap-3 self-center rounded-lg bg-slate-grey p-2 sm:p-4">
      <CiSearch className="text-2xl text-[#989898]" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-grey font-sfPro text-sm font-medium leading-normal text-black outline-none sm:text-base"
      />
    </form>
  );
}

export default SearchForm;
