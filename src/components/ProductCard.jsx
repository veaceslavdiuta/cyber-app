import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FavoriteContext } from '../contexts/FavoriteContext';
import { FiHeart } from 'react-icons/fi';

function ProductCard(props) {
  const { addProductToShoppingCart } = useContext(CartContext);
  const { isProductFavorite, handleFavoriteProduct } =
    useContext(FavoriteContext);
  const isFavorite = isProductFavorite(props.device?.id);

  return (
    <div className="flex flex-col justify-start gap-2 rounded-lg bg-[#F6F6F6] px-4 py-6 md:gap-4">
      <FiHeart
        onClick={() => handleFavoriteProduct(props.device)}
        className={`cursor-pointer self-end text-[28px] ${isFavorite ? 'fill-[#FF0000] text-[#FF0000]' : 'text-[#919191]'} hover:fill-[#FF0000] hover:text-[#FF0000]`}
      />

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
        <p className="flex flex-col font-sfPro text-2xl font-semibold leading-6 tracking-[0.72px]">
          {props.device?.discount ? (
            <span>${props.device?.discount}</span>
          ) : (
            <span>${props.device?.price}</span>
          )}
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
