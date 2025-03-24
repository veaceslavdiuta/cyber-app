function CartProduct() {
  return (
    <>
      <div className="flex w-full items-center gap-4 py-4">
        <img src="/src/assets/image 57.png" alt="" />
        <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex w-full flex-col gap-2">
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
          <div className="flex w-full justify-between gap-2">
            <div className="flex items-center gap-2">
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
                    strokeWidth="1.2"
                    strokeLinecap="round"
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
