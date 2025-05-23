function BannerDevices() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col justify-between xl:container lg:flex-row xl:mx-auto">
        <div className="grid grid-cols-1 lg:w-1/2 lg:grid-cols-2">
          <div className="flex w-full flex-col items-center gap-4 px-4 py-10 lg:col-span-2 lg:flex-row lg:p-0 lg:pr-4">
            <picture className="lg:w-full">
              <source
                srcSet="/src/assets/PlayStation.png"
                media="(min-width: 1024px)"
              />
              <img
                loading="lazy"
                src="/src/assets/PlayStationSmall.webp"
                alt="PlayStationSmall"
              />
            </picture>
            <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-4">
              <h5 className="font-sfProl text-4xl font-light leading-10 text-black lg:text-5xl lg:font-medium">
                Playstation <span className="font-semibold">5</span>
              </h5>
              <p className="text-center font-sfPro text-base font-medium leading-6 text-[#909090] lg:text-start">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 bg-[#EDEDED] px-4 py-10 lg:col-span-1 lg:flex-row lg:p-0 lg:pr-4">
            <picture className="lg:w-full">
              <source
                srcSet="/src/assets/AppleAirpods.png"
                media="(min-width: 1024px)"
              />
              <img
                loading="lazy"
                src="/src/assets/AppleAirpodsSmall.webp"
                alt="AppleAirpodsSmall"
              />
            </picture>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h5 className="font-sfPro text-4xl font-light leading-10 text-black lg:text-3xl">
                Apple Airpods <span className="font-semibold">Max</span>
              </h5>
              <p className="text-center font-sfPro text-base font-medium leading-6 text-[#909090] lg:text-start lg:text-sm">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 bg-[#353535] px-4 py-10 lg:col-span-1 lg:flex-row lg:p-0 lg:pr-4">
            <picture className="lg:w-full">
              <source
                srcSet="/src/assets/AppleVisionPro.png"
                media="(min-width: 1024px)"
              />

              <img
                loading="lazy"
                src="/src/assets/AppleVisionProSmall.webp"
                alt="AppleVisionSmall"
              />
            </picture>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h5 className="font-sfPro text-4xl font-light leading-10 text-white lg:text-3xl">
                Apple Vision <span className="font-semibold">Pro</span>
              </h5>
              <p className="text-center font-sfPro text-base font-medium leading-6 text-[#909090] lg:text-start lg:text-sm">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center bg-[#EDEDED] px-4 py-10 lg:w-1/2 lg:flex-row lg:px-0 lg:py-11">
          <picture className="lg:order-2">
            <source
              srcSet="/src/assets/MacBookPro.png"
              media="(min-width: 1024px)"
            />
            <img src="/src/assets/MacBookProSmall.webp" alt="MacBookProSmall" />
          </picture>
          <div className="flex flex-col items-center gap-2 lg:order-1 lg:items-start lg:gap-4 lg:pl-14">
            <h5 className="font-sfPro text-4xl font-light leading-tight text-black lg:text-[64px] lg:font-semibold">
              <span className="font-semibold lg:font-medium">Macbook</span> Air
            </h5>
            <p className="text-center font-sfPro text-base font-medium leading-6 text-[#909090] lg:text-start">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="w-2/3 rounded-md border border-black px-14 py-4 font-sfPro text-base font-medium leading-6 text-black hover:bg-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerDevices;
