import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

function CartProduct(props) {
  const {
    removeProductFromCart,
    addProductToShoppingCart,
    decreaseProductQuantity,
  } = useContext(CartContext);

  return (
    <>
      <div className="flex w-full items-center gap-4 py-4">
        <Link to={`/${props.product.category}/${props.product.model}`}>
          <img
            className="w-24"
            src={`/src/assets/devices/${props.product.images[0]}`}
            alt={props.product.model}
          />
        </Link>
        <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex w-full flex-col gap-2">
            <h4 className="font-sfPro text-base font-semibold leading-6">
              {props.product.model}
            </h4>
            <p className="font-sfPro text-base font-semibold leading-6">
              {props.product.category}
            </p>
          </div>
          <div className="flex w-full justify-between gap-2">
            <div className="flex items-center gap-2">
              <button onClick={() => decreaseProductQuantity(props.product)}>
                <FiMinus className="text-lg hover:text-slate-600" />
              </button>
              <p className="rounded border-[0.5px] border-[#D9D9D9] px-4 py-2 font-sfPro text-base font-medium leading-4">
                {props.product.quantity}
              </p>
              <button onClick={() => addProductToShoppingCart(props.product)}>
                <FiPlus className="text-lg hover:text-slate-600" />
              </button>
            </div>

            <p className="font-sfPro text-xl font-medium leading-8 tracking-[0.6px]">
              ${props.product.price}
            </p>
            <button
              onClick={() => removeProductFromCart(props.product.firestoreId)}
            >
              <IoMdClose className="cursor-pointer self-end text-3xl hover:text-[#FF0000]" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#A3A3A3]"></div>
    </>
  );
}

export default CartProduct;
