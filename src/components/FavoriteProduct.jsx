import { useContext } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';
import { CartContext } from '../contexts/CartContext';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function FavoriteProduct(props) {
  const { addProductToShoppingCart } = useContext(CartContext);
  const { deleteProductFromFavorite } = useContext(FavoriteContext);

  return (
    <div className="flex flex-col justify-start gap-2 rounded-lg bg-[#F6F6F6] px-4 py-6 md:gap-4">
      <IoMdClose
        onClick={() => deleteProductFromFavorite(props.device.firestoreId)}
        className="cursor-pointer self-end text-3xl hover:text-[#FF0000]"
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

export default FavoriteProduct;
