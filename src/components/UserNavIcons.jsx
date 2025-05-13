import { FiUser } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function UserNavIcons() {
  return (
    <div className="flex items-center gap-6 self-center">
      <Link to="/favorite">
        <IoMdHeartEmpty className="text-[30px]" />
      </Link>
      <Link to="/cart">
        <IoCartOutline className="text-[32px]" />
      </Link>
      <Link to="/my-account">
        <FiUser className="text-[30px]" />
      </Link>
    </div>
  );
}

export default UserNavIcons;
