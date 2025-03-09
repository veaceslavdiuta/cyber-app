// import { useState } from 'react';

function PopularProducts() {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const banners = [
  //   {
  //     name: 'Popular Products',
  //     description:
  //       ' iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
  //     image: 'image 39.png',
  //     bg: 'white',
  //   },
  //   {
  //     name: 'Ipad Pro',
  //     description:
  //       ' iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
  //     image: 'image 64.png',
  //     bg: '#F9F9F9',
  //   },
  //   {
  //     name: 'Samsung Galaxy',
  //     description:
  //       ' iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
  //     image: 'image 41.png',
  //     bg: '#EAEAEA',
  //   },
  //   {
  //     name: 'Macbook Pro',
  //     description:
  //       ' iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
  //     image: 'Macbook 1.png',
  //     bg: '#2C2C2C',
  //   },
  // ];

  return (
    <section className="w-full">
      <div
        className={`] container mx-auto grid max-w-screen-2xl grid-cols-1 pb-14 md:grid-cols-2 xl:grid-cols-4`}
      >
        {/* <div className="flex flex-col items-center justify-between">
          <div className="relative">
            <img src={`/src/assets/${banners[activeIndex].image}`} alt="" />
            <img
              className="absolute right-[20px] top-0"
              src="/src/assets/image 12.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-4 px-8 pb-14 lg:items-start">
            <h3 className="text-center font-sfPro text-5xl font-light leading-normal text-black last:text-white lg:text-start lg:text-4xl">
              {banners[activeIndex].name}
            </h3>
            <p className="text-center font-sfPro text-sm font-medium leading-6 text-[#909090] lg:text-start">
              {banners[activeIndex].description}
            </p>
            <button className="rounded-md border border-black px-14 py-4 font-sfPro text-base font-medium leading-6 last:border-white last:text-white hover:bg-black hover:text-white last:hover:bg-white last:hover:text-black">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === index
                  ? 'scale-125 bg-black'
                  : 'bg-black opacity-10'
              }`}
            />
          ))}
        </div> */}

        <div className="flex flex-col items-center justify-between">
          <div className="relative">
            <img className="" src="/src/assets/image 39.png" alt="" />
            <img
              className="absolute right-[20px] top-0"
              src="/src/assets/image 12.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-4 px-8 pb-14 lg:items-start">
            <h3 className="text-center font-sfPro text-5xl font-light leading-normal lg:text-start lg:text-4xl">
              Popular Products
            </h3>
            <p className="text-center font-sfPro text-sm font-medium leading-6 text-[#909090] lg:text-start">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="rounded-md border border-black px-14 py-4 font-sfPro text-base font-medium leading-6 hover:bg-black hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#F9F9F9] pl-8">
          <img className="self-end" src="/src/assets/image 64.png" alt="" />
          <div className="flex flex-col items-center gap-4 pb-14 pr-8 lg:items-start">
            <h3 className="text-center font-sfPro text-5xl font-light leading-normal lg:text-start lg:text-4xl">
              Ipad Pro
            </h3>
            <p className="text-center font-sfPro text-sm font-medium leading-6 text-[#909090] lg:text-start">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="rounded-md border border-black px-14 py-4 font-sfPro text-base font-medium leading-6 hover:bg-black hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#EAEAEA]">
          <img className="self-center" src="/src/assets/image 41.png" alt="" />
          <div className="flex flex-col items-center gap-4 px-8 pb-14 lg:items-start">
            <h3 className="text-center font-sfPro text-5xl font-light leading-normal lg:text-start lg:text-4xl">
              Samsung Galaxy
            </h3>
            <p className="text-center font-sfPro text-sm font-medium leading-6 text-[#909090] lg:text-start">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="rounded-md border border-black px-14 py-4 font-sfPro text-base font-medium leading-6 hover:bg-black hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#2C2C2C]">
          <img className="self-end" src="/src/assets/Macbook 1.png" alt="" />
          <div className="flex flex-col items-center gap-4 px-8 pb-14 lg:items-start">
            <h3 className="text-center font-sfPro text-5xl font-light leading-normal text-white lg:text-start lg:text-4xl">
              Macbook Pro
            </h3>
            <p className="text-center font-sfPro text-sm font-medium leading-6 text-[#909090] lg:text-start">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="rounded-md border border-white px-14 py-4 font-sfPro text-base font-medium leading-6 text-white hover:bg-white hover:text-black">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
