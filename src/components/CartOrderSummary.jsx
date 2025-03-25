import { useNavigate } from 'react-router-dom';
import Summary from './Summary';

function CartOrderSummary() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 rounded-xl border border-[#EBEBEB] px-4 py-14 sm:px-16 lg:w-1/2">
      <h4 className="font-sfPro text-xl font-semibold leading-4">
        Oder Summary
      </h4>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="discountCode"
            className="font-sfPro text-sm font-medium leading-4 text-[#545454]"
          >
            Discount code / Promo code
          </label>
          <input
            type="text"
            name="discountCode"
            id="discountCode"
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
            id="bonus"
            placeholder="Enter Card Number"
            className="borde-[#9F9F9F] rounded-md border-[0.5px] p-4 font-sfPro text-sm font-medium leading-6 text-[#979797] outline-none"
          />
        </div>
      </div>

      <Summary />

      <button
        onClick={() => navigate('/checkout/step-1')}
        className="rounded-md border bg-black py-4 font-sfPro text-base font-medium leading-6 text-white"
      >
        Checkout
      </button>
    </div>
  );
}

export default CartOrderSummary;
