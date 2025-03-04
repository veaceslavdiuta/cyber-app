import { useState } from 'react';
import CloseIcon from './CloseIcon';
import MenuIcon from './MenuIcon';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-6">
      <img src="/src/assets/Logo.png" alt="Logo" />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
}

export default Header;
