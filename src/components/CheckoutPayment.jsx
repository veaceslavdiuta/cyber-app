import { useNavigate } from 'react-router-dom';

function CheckoutPayment() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 sm:w-2/3 lg:w-1/2">
      <h3 className="font-sfPro text-xl font-semibold leading-6">Payment</h3>
      <ul className="flex gap-14">
        <li className="border-b-2 pb-2 font-sfPro text-sm font-medium leading-4 tracking-[0.42px]">
          Credit Card
        </li>
        <li className="font-sfPro text-sm font-medium leading-4 tracking-[0.42px]">
          PayPal
        </li>
        <li className="font-sfPro text-sm font-medium leading-4 tracking-[0.42px]">
          PayPal Credit
        </li>
      </ul>
      <img
        src="/src/assets/Credit Card.png"
        className="w-full max-w-96 py-4"
        alt=""
      />
      <form className="flex flex-col gap-4">
        <input
          className="rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6 outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Cardholder Name"
        />
        <input
          className="rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6 outline-none"
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder="Card Number"
        />
        <div className="flex gap-4">
          <input
            className="w-full rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6 outline-none"
            type="text"
            name="expDate"
            id="expDate"
            placeholder="Exp.Date"
          />
          <input
            className="w-full rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6 outline-none"
            type="text"
            name="cvv"
            id="cvv"
            placeholder="CVV"
          />
        </div>
      </form>
      <div className="flex gap-4 pt-12">
        <button
          onClick={() => navigate('/checkout/step-2')}
          className="w-full rounded-md border py-4 font-sfPro text-base font-medium hover:bg-[#F4F4F4] sm:px-20"
        >
          Back
        </button>
        <button className="w-full rounded-md border bg-black py-4 font-sfPro text-base font-medium text-white hover:opacity-60 sm:px-20">
          Pay
        </button>
      </div>
    </div>
  );
}

export default CheckoutPayment;
