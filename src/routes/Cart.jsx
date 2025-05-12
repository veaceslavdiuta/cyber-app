import { useContext } from 'react';
import CartOrderSummary from '../components/CartOrderSummary';
import CartProduct from '../components/CartProduct';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cartProducts } = useContext(CartContext);

  return (
    <main className="w-full">
      <section className="container mx-auto flex max-w-screen-xl flex-col justify-center gap-12 px-4 py-20 lg:flex-row">
        {cartProducts.length === 0 ? (
          <h3 className="h-dvh text-center font-sfPro text-3xl font-medium leading-6">
            The shopping cart is empty!
          </h3>
        ) : (
          <>
            <div className="flex flex-col gap-10 lg:w-1/2">
              <h3 className="font-sfPro text-2xl font-semibold leading-6">
                Shopping Cart
              </h3>
              <div className="flex flex-col gap-10">
                {cartProducts.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </div>
            </div>
            <CartOrderSummary />
          </>
        )}
      </section>
    </main>
  );
}

export default Cart;
