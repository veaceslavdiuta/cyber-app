import ProductCard from './ProductCard';

function DiscountProducts() {
  return (
    <section className="w-full">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14">
        <h3 className="font-sfPro text-2xl font-semibold leading-8">
          Discounts up to -50%
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default DiscountProducts;
