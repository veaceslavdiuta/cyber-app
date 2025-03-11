function PopularProducts() {
  return (
    <section className="w-full">
      <div
        className={`container mx-auto grid max-w-screen-2xl grid-cols-1 pb-14 md:grid-cols-2 xl:grid-cols-4`}
      >
        <div className="flex flex-col items-center justify-between">
          <div className="relative">
            <img className="" src="/src/assets/bannerImg1.png" alt="" />
            <img
              className="absolute right-[20px] top-0"
              src="/src/assets/image 12.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-4 px-8 py-14 lg:items-start">
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
        <div className="flex flex-col justify-between bg-[#F9F9F9] px-8">
          <img className="self-end" src="/src/assets/ipadpro.png" alt="" />
          <div className="flex flex-col items-center gap-4 pb-14 lg:items-start">
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
          <img
            className="self-center"
            src="/src/assets/samsunggalaxy.png"
            alt=""
          />
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
        <div className="flex flex-col justify-between bg-[#2C2C2C] px-8">
          <img className="self-end" src="/src/assets/imageMac.png" alt="" />
          <div className="flex flex-col items-center gap-4 pb-14 lg:items-start">
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
