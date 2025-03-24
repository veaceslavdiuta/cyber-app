import { useNavigate } from 'react-router-dom';
import StepsSection from '../components/StepsSection';

function CheckoutFirstStep() {
  const navigate = useNavigate();

  return (
    <main>
      <StepsSection />
      <section className="container mx-auto flex max-w-screen-xl flex-col gap-12 px-4 py-16">
        <h3 className="font-sfPro text-xl font-semibold leading-6">
          Select Address
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-4 rounded-md bg-[#F6F6F6] p-6">
            <div className="flex gap-4">
              <input
                type="radio"
                name="address"
                id="address"
                className="h-6 w-6 cursor-pointer accent-black"
              />
              <div className="flex flex-col gap-2">
                <p className="flex gap-6 font-sfPro text-lg font-normal leading-6 text-[#17183B]">
                  2118 Thornridge{' '}
                  <span className="rounded-md bg-black px-2 py-1 font-sfPro text-xs font-medium uppercase text-white">
                    Home
                  </span>
                </p>
                <p className="font-sfPro text-base font-normal leading-6 text-[#17183B]">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </p>
                <p className="font-sfPro text-base font-normal leading-6 text-[#17183B]">
                  (209) 555-0104
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67153 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27312L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87628 11.7269 8.27312Z"
                    fill="black"
                  />
                </svg>
              </button>
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
          </div>
          <div className="flex justify-between gap-4 rounded-md bg-[#F6F6F6] p-6">
            <div className="flex gap-4">
              <input
                type="radio"
                name="address"
                id="address"
                className="h-6 w-6 cursor-pointer accent-black"
              />
              <div className="flex flex-col gap-2">
                <p className="flex gap-6 font-sfPro text-lg font-normal leading-6 text-[#17183B]">
                  Headoffice{' '}
                  <span className="rounded-md bg-black px-2 py-1 font-sfPro text-xs font-medium uppercase text-white">
                    Office
                  </span>
                </p>
                <p className="font-sfPro text-base font-normal leading-6 text-[#17183B]">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
                <p className="font-sfPro text-base font-normal leading-6 text-[#17183B]">
                  (704) 555-0127
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67153 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27312L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87628 11.7269 8.27312Z"
                    fill="black"
                  />
                </svg>
              </button>
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
          </div>
        </div>
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
            className="rounded-md border px-20 py-4 font-sfPro text-base font-medium hover:bg-[#F4F4F4]"
          >
            Back
          </button>
          <button
            onClick={() => navigate('/checkout/step-2')}
            className="rounded-md border bg-black px-20 py-4 font-sfPro text-base font-medium text-white hover:opacity-60"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default CheckoutFirstStep;
