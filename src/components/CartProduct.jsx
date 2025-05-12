import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function CartProduct(props) {
  const {
    removeProductFromCart,
    addProductToShoppingCart,
    decreaseProductQuantity,
  } = useContext(CartContext);

  return (
    <>
      <div className="flex w-full items-center gap-4 py-4">
        <img
          className="w-24"
          src={`/src/assets/devices/${props.product.images[0]}`}
          alt={props.product.model}
        />
        <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex w-full flex-col gap-2">
            <h4 className="font-sfPro text-base font-semibold leading-6">
              {props.product.model}
            </h4>
            <p className="font-sfPro text-base font-semibold leading-6">
              {/* {props.product} <span></span> */}
            </p>
            <p className="font-sfPro text-sm font-normal leading-6">
              {props.product.id}
            </p>
          </div>
          <div className="flex w-full justify-between gap-2">
            <div className="flex items-center gap-2">
              <button onClick={() => decreaseProductQuantity(props.product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 12L8 12"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <p className="rounded border-[0.5px] border-[#D9D9D9] px-4 py-2 font-sfPro text-base font-medium leading-4">
                {props.product.quantity}
              </p>
              <button onClick={() => addProductToShoppingCart(props.product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 8L12 16"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 12L8 12"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <p className="font-sfPro text-xl font-medium leading-8 tracking-[0.6px]">
              ${props.product.price}
            </p>
            <button
              onClick={() => removeProductFromCart(props.product.firestoreId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#A3A3A3]"></div>
    </>
  );
}

export default CartProduct;
