function CartOrderSummary() {
  return (
    <div className="flex w-1/2 flex-col gap-10 rounded-xl border border-[#EBEBEB] px-16 py-14">
      <h4 className="font-sfPro text-xl font-semibold leading-4">
        Oder Summary
      </h4>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="discountCode"
            className="font-sfPro text-sm font-medium leading-4 text-[#545454]"
          >
            Discout code / Promo code
          </label>
          <input
            type="text"
            name="dicountCode"
            placeholder="Code"
            className="borde-[#9F9F9F] rounded-md border-[0.5px] p-4 font-sfPro text-sm font-medium leading-6 text-[#979797] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="bonus"
            className="font-sfPro text-sm font-medium leading-4 text-[#545454]"
          >
            Your bonus card number
          </label>
          <input
            type="text"
            name="bonus"
            placeholder="Enter Card Number"
            className="borde-[#9F9F9F] rounded-md border-[0.5px] p-4 font-sfPro text-sm font-medium leading-6 text-[#979797] outline-none"
          />
        </div>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between font-sfPro text-base font-semibold leading-6">
          Subtotal <span>$2347</span>
        </li>
        <li className="flex justify-between font-sfPro text-base font-medium leading-6 text-[#545454]">
          Estimated Tax <span className="font-semibold text-black">$50</span>
        </li>
        <li className="flex justify-between font-sfPro text-base font-medium leading-6 text-[#545454]">
          Estimated shipping & Handling
          <span className="font-semibold text-black">$29</span>
        </li>
        <li className="flex justify-between font-sfPro text-base font-semibold leading-6">
          Total <span>$2426</span>
        </li>
      </ul>
      <button className="rounded-md border bg-black py-4 font-sfPro text-base font-medium leading-6 text-white">
        Checkout
      </button>
    </div>
  );
}

export default CartOrderSummary;
