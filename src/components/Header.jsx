import { useState } from 'react';
import CloseIcon from './CloseIcon';
import MenuIcon from './MenuIcon';
import SearchForm from './SearchForm';
import UserNavIcons from './UserNavIcons';
import Navbar from './Navbar';
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="container mx-auto flex w-full max-w-screen-xl items-center justify-between gap-7 px-4 py-6 lg:py-4">
        <Link to={'/'}>
          <img src="/src/assets/Logo.png" alt="Logo" />
        </Link>
        <div
          className={`absolute left-0 top-[88px] z-10 w-full flex-col items-center justify-between gap-9 lg:flex-row lg:gap-7 ${isOpen ? 'flex' : 'hidden'} bg-white pt-0 lg:static lg:flex lg:px-0 lg:py-0`}
        >
          <SearchForm />
          <Navbar />
          <UserNavIcons />

          <div className="block w-full lg:hidden">
            <CategoryNav isOpen={isOpen} />
          </div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <CategoryNav isOpen={isOpen} />
    </header>
  );
}

export default Header;
