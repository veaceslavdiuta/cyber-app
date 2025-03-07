function HomeHero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#211C24] to-[#211C24]">
      <div className="container mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-12 px-4 pt-[88px] lg:flex-row">
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <h5 className="font-figTree text-2xl font-semibold leading-8 text-white opacity-40">
              Pro.Beyond.
            </h5>
            <h1 className="text-center font-sfPro text-7xl font-[200] leading-[100%] tracking-[-0.72px] text-white lg:text-start lg:text-8xl lg:tracking-[-0.96px]">
              IPhone 14 <span className="font-bold">Pro</span>
            </h1>
            <p className="text-center font-sfPro text-lg font-medium leading-6 text-[#909090]">
              Created to change everything for the better.For everyone
            </p>
          </div>
          <button className="rounded-md border border-white px-14 py-4 font-sfPro text-base font-medium leading-6 text-white hover:bg-white hover:text-black">
            Shop Now
          </button>
        </div>
        <img src="/src/assets/IphoneImage .png" alt="IphoneImage" />
      </div>
    </section>
  );
}

export default HomeHero;
