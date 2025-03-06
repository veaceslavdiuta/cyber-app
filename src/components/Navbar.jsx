import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-4 sm:gap-8">
        <Link to={'/'}>
          <li className="font-sfPro text-base font-medium leading-8 text-black">
            Home
          </li>
        </Link>
        <Link to={'/about'}>
          <li className="font-sfPro text-base font-medium leading-8 text-black opacity-30">
            About
          </li>
        </Link>
        <Link to={'/contact-us'}>
          <li className="font-sfPro text-base font-medium leading-8 text-black opacity-30">
            Contact Us
          </li>
        </Link>
        <Link to={'/blog'}>
          <li className="font-sfPro text-base font-medium leading-8 text-black opacity-30">
            Blog
          </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
