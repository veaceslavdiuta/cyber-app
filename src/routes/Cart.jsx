import CartOrderSummary from '../components/CartOrderSummary';
import CartProduct from '../components/CartProduct';

function Cart() {
  return (
    <main className="w-full">
      <section className="container mx-auto flex max-w-screen-xl justify-between gap-12 px-4 py-20">
        <div className="flex w-1/2 flex-col gap-10">
          <h3 className="font-sfPro text-2xl font-semibold leading-6">
            Shopping Cart
          </h3>
          <div className="flex flex-col gap-10">
            <CartProduct />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="536"
              height="2"
              viewBox="0 0 536 2"
              fill="none"
            >
              <path
                d="M0 1C209.321 1 326.679 1 536 1"
                stroke="#A3A3A3"
                stroke-width="0.5"
              />
            </svg>
          </div>
        </div>
        <CartOrderSummary />
      </section>
    </main>
  );
}

export default Cart;
