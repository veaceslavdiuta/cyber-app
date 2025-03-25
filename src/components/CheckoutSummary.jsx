import Summary from './Summary';

function CheckoutSummary() {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-[#EBEBEB] px-6 py-7 lg:w-1/2">
      <h3 className="font-sfPro text-xl font-semibold leading-6">Summary</h3>
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
      <Summary />
    </div>
  );
}

export default CheckoutSummary;
