import CartOrderSummary from '../components/CartOrderSummary';
import CartProduct from '../components/CartProduct';

function Cart() {
  return (
    <main className="w-full">
      <section className="container mx-auto flex max-w-screen-xl flex-col justify-between gap-12 px-4 py-20 lg:flex-row">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <h3 className="font-sfPro text-2xl font-semibold leading-6">
            Shopping Cart
          </h3>
          <div className="flex flex-col gap-10">
            <CartProduct />
            <CartProduct />
          </div>
        </div>
        <CartOrderSummary />
      </section>
    </main>
  );
}

export default Cart;
