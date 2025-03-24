import { useNavigate } from 'react-router-dom';
import StepsSection from '../components/StepsSection';

function CheckoutSecondStep() {
  const navigate = useNavigate();

  return (
    <main>
      <StepsSection />
      <section className="container mx-auto flex max-w-screen-xl flex-col gap-12 px-4 py-16">
        <h3 className="font-sfPro text-xl font-semibold leading-6">
          Shipment method
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between rounded-xl border border-[#D1D1D8] p-6">
            <div className="flex items-center gap-4">
              <input
                name="delivery"
                type="radio"
                className="h-6 w-6 cursor-pointer accent-black"
              />
              <p className="flex gap-4 font-sfPro text-lg font-normal leading-6">
                Free <span className="text-[#17183B]">Regulary shipment</span>
              </p>
            </div>
            <p className="font-sfPro text-lg font-normal leading-6 text-[#17183B]">
              23 April, 2025
            </p>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#D1D1D8] p-6">
            <div className="flex items-center gap-4">
              <input
                name="delivery"
                type="radio"
                className="h-6 w-6 cursor-pointer accent-black"
              />
              <p className="flex gap-4 font-sfPro text-lg font-normal leading-6">
                $8.50
                <span className="text=[#17183B]">
                  Get your delivery as soon as posible
                </span>
              </p>
            </div>
            <p className="font-sfPro text-lg font-normal leading-6 text-[#17183B]">
              12 April, 2025
            </p>
          </div>
          <div className="flex justify-end gap-4 pt-56">
            <button
              onClick={() => navigate('/checkout/step-1')}
              className="rounded-md border px-20 py-4 font-sfPro text-base font-medium hover:bg-[#F4F4F4]"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/checkout/step-3')}
              className="rounded-md border bg-black px-20 py-4 font-sfPro text-base font-medium text-white hover:opacity-60"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CheckoutSecondStep;
