function DeviceMainInfo(props) {
  return (
    <section className="container mx-auto flex max-w-screen-xl justify-between gap-10 px-4 py-28">
      <div className="flex w-full items-center gap-12">
        <div className="flex flex-col items-center gap-6">
          <img src="/src/assets/image 57.png" alt="" />
          <img src="/src/assets/image 61.png" alt="" />
          <img src="/src/assets/image 62.png" alt="" />
          <img src="/src/assets/image 63.png" alt="" />
        </div>
        <img src="/src/assets/Image.png" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <h2 className="font-sfPro text-[40px] font-semibold leading-10">
            {props.device.name}
          </h2>
          <p className="font-sfPro text-[32px] font-medium leading-normal">
            ${props.device.price}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <p className="font-sfPro text-base font-normal leading-6">
              Select color :
            </p>
            <div className="flex gap-2">
              <button className="h-8 w-8 rounded-full bg-black outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#781DBC] outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#E10000] outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#E1B000] outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#E8E8E8] outline-2 outline-offset-2 hover:outline"></button>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="rounded-lg border border-[#D5D5D5] px-6 py-4 font-sfPro text-sm font-medium hover:border-black">
              128GB
            </button>
            <button className="rounded-lg border border-[#D5D5D5] px-6 py-4 font-sfPro text-sm font-medium hover:border-black">
              256GB
            </button>
            <button className="rounded-lg border border-[#D5D5D5] px-6 py-4 font-sfPro text-sm font-medium hover:border-black">
              512GB
            </button>
            <button className="rounded-lg border border-[#D5D5D5] px-6 py-4 font-sfPro text-sm font-medium hover:border-black">
              1TB
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-4">
              <img src="/src/assets/Detail1.png" alt="" />
              <p className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#A7A7A7]">
                Screen size <span className="text-[#4E4E4E]">6.7"</span>
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-4">
              <img src="/src/assets/Detail2.png" alt="" />
              <p className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#A7A7A7]">
                CPU
                <span className="text-[#4E4E4E]">Apple A16 Bionic</span>
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-4">
              <img src="/src/assets/Detail3.png" alt="" />
              <p className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#A7A7A7]">
                Number of Cores
                <span className="text-[#4E4E4E]">6</span>
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-4">
              <img src="/src/assets/Detail4.png" alt="" />
              <p className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#A7A7A7]">
                Main camera
                <span className="text-[#4E4E4E]">48-12-12 MP</span>
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-4">
              <img src="/src/assets/Detail5.png" alt="" />
              <p className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#A7A7A7]">
                Front-camera
                <span className="text-[#4E4E4E]">12 MP</span>
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-4">
              <img src="/src/assets/Detail6.png" alt="" />
              <p className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#A7A7A7]">
                Battery capacity
                <span className="text-[#4E4E4E]">4323 mAh</span>
              </p>
            </div>
          </div>
          <p className="font-sfPro text-sm font-normal leading-6 text-[#6C6C6C]">
            Enhanced capabilities thanks toan enlarged display of 6.7 inches and
            work without recharging throughout the day. Incredible photos as in
            weak, yes and in bright light using the new system with two cameras.
          </p>
        </div>
        <div className="flex w-full gap-4 py-4">
          <button className="w-1/2 rounded-md border border-black py-4 font-sfPro text-base font-medium leading-6 hover:bg-[#F4F4F4]">
            Add to Wishlist
          </button>
          <button className="w-1/2 rounded-md border border-black bg-black py-4 font-sfPro text-base font-medium leading-6 text-white hover:opacity-60">
            Add to card
          </button>
        </div>
        <div className="flex w-full justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              className="rounded-xl bg-[#F6F6F6] p-4"
              src="/src/assets/feature1.png"
              alt=""
            />
            <p className="flex flex-col font-sfPro text-sm font-medium leading-6 text-[#717171]">
              Free Delivery
              <span className="font-semibold text-black">1-2 day</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="rounded-xl bg-[#F6F6F6] p-4"
              src="/src/assets/feature2.png"
              alt=""
            />
            <p className="flex flex-col font-sfPro text-sm font-medium leading-6 text-[#717171]">
              In Stock
              <span className="font-semibold text-black">Today</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="rounded-xl bg-[#F6F6F6] p-4"
              src="/src/assets/feature3.png"
              alt=""
            />
            <p className="flex flex-col font-sfPro text-sm font-medium leading-6 text-[#717171]">
              Guaranteed
              <span className="font-semibold text-black">1 year</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeviceMainInfo;
