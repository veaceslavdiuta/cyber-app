import ProductCard from './ProductCard';

function HomeProducts() {
  return (
    <section className="w-full">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14">
        <ul className="flex justify-center gap-8 md:justify-start">
          <li className="border-b-2 border-black font-sfPro text-sm font-medium leading-8 sm:text-lg">
            New Arrival
          </li>
          <li className="font-sfPro text-sm font-medium leading-8 text-[#8B8B8B] sm:text-lg">
            Bestseller
          </li>
          <li className="font-sfPro text-sm font-medium leading-8 text-[#8B8B8B] sm:text-lg">
            Featured Products
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;
