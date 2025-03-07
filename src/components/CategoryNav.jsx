import { Link } from 'react-router-dom';

function CategoryNav({ isOpen }) {
  const categories = [
    { name: 'Phones', path: '/phones', icon: 'Phones.svg' },
    { name: 'Computers', path: '/computers', icon: 'Computers.svg' },
    { name: 'Smart Watches', path: '/smart-watches', icon: 'Gaming.svg' },
    { name: 'Cameras', path: '/cameras', icon: 'Cameras.svg' },
    { name: 'Headphones', path: '/headphones', icon: 'Headphones.svg' },
    { name: 'Gaming', path: '/gaming', icon: 'Gaming.svg' },
  ];

  return (
    <div
      className={`w-full bg-charcoal ${isOpen ? 'block' : 'hidden'} lg:block`}
    >
      <ul className="flex flex-wrap justify-between gap-4 px-4 py-2 lg:container sm:flex-row md:justify-between lg:mx-auto lg:max-w-screen-xl">
        {categories.map((category, index) => (
          <>
            <li
              key={index}
              className="w-[47%] font-sfPro text-base font-medium leading-8 text-white opacity-50 hover:opacity-100 md:w-auto"
            >
              <Link className="flex items-center gap-2" to={`${category.path}`}>
                <img src={`/src/assets/${category.icon}`} alt={category.icon} />
                {category.name}
              </Link>
            </li>
            {index < categories.length - 1 && (
              <div className="hidden border-r-2 border-white border-opacity-20 md:block"></div>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}

export default CategoryNav;
