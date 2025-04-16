import { Link } from 'react-router-dom';

function Categories() {
  const devicesCategory = [
    { id: 1, name: 'Phones', icon: 'Phones.png', link: '/smartphones' },
    {
      id: 2,
      name: 'Smart Watches',
      icon: 'Smart Watches.png',
      link: '/smartwatches',
    },
    { id: 3, name: 'Cameras', icon: 'Cameras.png', link: '/cameras' },
    {
      id: 4,
      name: 'Headphones',
      icon: 'Headphones.png',
      link: '/headphones',
    },
    {
      id: 5,
      name: 'Computers',
      icon: 'Computers.png',
      link: '/computers',
    },
    { id: 6, name: 'Gaming', icon: 'Gaming.png', link: '/gaming' },
  ];

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-6 px-8 py-20 md:px-4">
        <h3 className="font-sfPro text-2xl font-semibold leading-8 text-black">
          Browse By Category
        </h3>
        <div className="flex w-full flex-wrap justify-center gap-4 lg:flex-nowrap lg:justify-between lg:gap-8">
          {devicesCategory.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#EDEDED] py-6 transition-transform duration-300 hover:scale-110"
            >
              <img
                className="px-[52px]"
                src={`/src/assets/${item.icon}`}
                alt={item.icon}
              />
              <p className="font-sfPro text-base font-semibold leading-6">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
