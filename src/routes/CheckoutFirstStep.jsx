import { useNavigate } from 'react-router-dom';
import StepsSection from '../components/StepsSection';
import ShippingAddress from '../components/ShippingAddress';

function CheckoutFirstStep() {
  const navigate = useNavigate();

  return (
    <main>
      <StepsSection />
      <section className="container mx-auto flex max-w-screen-xl flex-col gap-12 px-4 py-16">
        <h3 className="font-sfPro text-xl font-semibold leading-6">
          Select Address
        </h3>
        <ShippingAddress />

        <div className="flex flex-col items-center gap-2">
          <div className="flex w-full items-center">
            <span className="w-full border-t border-dashed border-black"></span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44771 11.4477 6 12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z"
                  fill="black"
                />
              </svg>
            </button>
            <span className="w-full border-t border-dashed border-black"></span>
          </div>
          <p className="font-sfPro text-sm font-normal leading-4">
            Add New Address
          </p>
        </div>
        <div className="flex justify-end gap-4 pt-4">
          <button
            onClick={() => navigate('/cart')}
            className="w-full max-w-52 rounded-md border py-4 font-sfPro text-base font-medium hover:bg-[#F4F4F4] sm:px-20"
          >
            Back
          </button>
          <button
            onClick={() => navigate('/checkout/step-2')}
            className="w-full max-w-52 rounded-md border bg-black py-4 font-sfPro text-base font-medium text-white hover:opacity-60 sm:px-20"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default CheckoutFirstStep;
