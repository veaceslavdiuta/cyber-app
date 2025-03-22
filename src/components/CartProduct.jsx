function CartProduct() {
  return (
    <div className="flex w-full items-center gap-4 py-4">
      <img src="/src/assets/image 57.png" alt="" />
      <div className="flex flex-col">
        <h4 className="font-sfPro text-base font-semibold leading-6">
          Apple Iphone 15 Pro Max
        </h4>
        <p className="font-sfPro text-base font-semibold leading-6">
          128GB <span>Deep Purple</span>
        </p>
        <p className="font-sfPro text-sm font-normal leading-6">
          #25139526913984
        </p>
      </div>
      <div className="flex gap-2">
        <button>
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
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <p className="rounded border-[0.5px] border-[#D9D9D9] px-4 py-2 font-sfPro text-base font-medium leading-4">
          1
        </p>
        <button>
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
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M16 12L8 12"
              stroke="black"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <p className="font-sfPro text-xl font-medium leading-8 tracking-[0.6px]">
        $1399
      </p>
      <button>
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
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartProduct;
