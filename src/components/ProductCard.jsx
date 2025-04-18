import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function ProductCard(props) {
  const { addProductToShoppingCart } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-start gap-2 rounded-lg bg-[#F6F6F6] px-4 py-6 md:gap-4">
      <svg
        className="group cursor-pointer self-end hover:fill-[#FF0000]"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z"
          stroke="#919191"
          className="group-hover:stroke-[#FF0000]"
          strokeOpacity="0.77"
          strokeWidth="1.4"
        />
      </svg>
      <Link
        to={`/${props.device?.category}/${props.device?.model}`}
        className="flex flex-auto flex-col items-center justify-between gap-4"
      >
        <img
          className="w-2/3"
          src={`/src/assets/devices/${props.device?.images[0]}`}
          alt={props.device?.model}
        />
        <h4 className="line-clamp-2 text-center font-sfPro text-base font-medium leading-6 text-black sm:text-lg">
          {props.device?.model}
        </h4>
        <p className="font-sfPro text-2xl font-semibold leading-6 tracking-[0.72px]">
          ${props.device?.price}
        </p>
      </Link>
      <button
        onClick={() => addProductToShoppingCart(props.device)}
        className="w-full rounded-lg bg-black py-4 font-sfPro text-sm font-medium leading-6 text-white hover:bg-[#353535]"
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
