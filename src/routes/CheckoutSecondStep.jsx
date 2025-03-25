import { useNavigate } from 'react-router-dom';
import StepsSection from '../components/StepsSection';
import ShipmentMethod from '../components/ShipmentMethod';

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
          <ShipmentMethod />

          <div className="flex justify-end gap-4 pt-56">
            <button
              onClick={() => navigate('/checkout/step-1')}
              className="w-full max-w-52 rounded-md border py-4 font-sfPro text-base font-medium hover:bg-[#F4F4F4] sm:px-20"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/checkout/step-3')}
              className="w-full max-w-52 rounded-md border bg-black py-4 font-sfPro text-base font-medium text-white hover:opacity-60 sm:px-20"
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
