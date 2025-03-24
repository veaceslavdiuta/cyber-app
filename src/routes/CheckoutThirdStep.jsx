import { useNavigate } from 'react-router-dom';
import StepsSection from '../components/StepsSection';

function CheckoutThirdStep() {
  const navigate = useNavigate();

  return (
    <main>
      <StepsSection />
      <section className="container mx-auto flex max-w-screen-xl justify-between gap-24 px-4 py-16">
        <div className="flex w-1/2 flex-col gap-6 rounded-xl border border-[#EBEBEB] px-6 py-7">
          <h3 className="font-sfPro text-xl font-semibold leading-6">
            Summary
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-xl bg-[#F6F6F6] p-4">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/Iphone 14 pro 1.png"
                  className="h-10 w-10"
                  alt=""
                />
                <h5 className="flex justify-between font-sfPro text-base font-medium leading-6">
                  Apple iPhone 14 Pro Max 128GB
                </h5>
              </div>
              <p className="flex justify-between font-sfPro text-base font-semibold leading-6">
                $1399
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#F6F6F6] p-4">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/Iphone 14 pro 1.png"
                  className="h-10 w-10"
                  alt=""
                />
                <h5 className="flex justify-between font-sfPro text-base font-medium leading-6">
                  Apple iPhone 14 Pro Max 128GB
                </h5>
              </div>
              <p className="flex justify-between font-sfPro text-base font-semibold leading-6">
                $1399
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#F6F6F6] p-4">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/Iphone 14 pro 1.png"
                  className="h-10 w-10"
                  alt=""
                />
                <h5 className="flex justify-between font-sfPro text-base font-medium leading-6">
                  Apple iPhone 14 Pro Max 128GB
                </h5>
              </div>
              <p className="flex justify-between font-sfPro text-base font-semibold leading-6">
                $1399
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#545454]">
              Address
              <span className="py-3 text-base leading-6 text-black">
                1131 Dusty Townline, Jacksonville, TX 40322
              </span>
            </h4>
            <h4 className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#545454]">
              Shipment method
              <span className="py-3 text-base leading-6 text-black">Free</span>
            </h4>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between font-sfPro text-base font-semibold leading-6 tracking-[0.48px]">
              Subtotal <span>$2347</span>
            </li>
            <li className="flex justify-between font-sfPro text-base font-medium leading-6 tracking-[0.48px] text-[#545454]">
              Estimated Tax{' '}
              <span className="font-semibold text-black">$50</span>
            </li>
            <li className="flex justify-between font-sfPro text-base font-medium leading-6 tracking-[0.48px] text-[#545454]">
              Estimated shipping & Handling
              <span className="font-semibold text-black">$29</span>
            </li>
            <li className="flex justify-between font-sfPro text-base font-semibold leading-6 tracking-[0.48px]">
              Total <span>$2426</span>
            </li>
          </ul>
        </div>
        <div className="flex w-1/2 flex-col gap-6">
          <h3 className="font-sfPro text-xl font-semibold leading-6">
            Payment
          </h3>
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
              className="outline-non rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6"
              type="text"
              name="name"
              placeholder="Cardholder Name"
            />
            <input
              className="rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6 outline-none"
              type="text"
              name="name"
              placeholder="Card Number"
            />
            <div className="flex gap-4">
              <input
                className="w-full rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6 outline-none"
                type="text"
                name="name"
                placeholder="Exp.Date"
              />
              <input
                className="w-full rounded-md border-[0.5px] border-[#CECECE] px-4 py-3 font-sfPro text-sm font-normal leading-6 outline-none"
                type="text"
                name="name"
                placeholder="CVV"
              />
            </div>
          </form>
          <div className="flex gap-4 pt-12">
            <button
              onClick={() => navigate('/checkout/step-2')}
              className="w-full rounded-md border px-20 py-4 font-sfPro text-base font-medium hover:bg-[#F4F4F4]"
            >
              Back
            </button>
            <button className="w-full rounded-md border bg-black px-20 py-4 font-sfPro text-base font-medium text-white hover:opacity-60">
              Pay
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CheckoutThirdStep;
