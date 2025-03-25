function ShipmentMethod() {
  return (
    <>
      <div className="flex items-center justify-between rounded-xl border border-[#D1D1D8] p-6">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
          <input
            name="delivery"
            type="radio"
            className="h-6 w-6 cursor-pointer accent-black"
          />
          <p className="flex flex-col items-start gap-2 font-sfPro text-sm font-normal leading-6 sm:flex-row sm:gap-4 sm:text-lg">
            Free <span className="text-[#17183B]">Regulary shipment</span>
          </p>
        </div>
        <p className="font-sfPro text-sm font-normal leading-6 text-[#17183B] sm:text-lg">
          23 April, 2025
        </p>
      </div>
      <div className="flex items-center justify-between gap-16 rounded-xl border border-[#D1D1D8] p-6">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
          <input
            name="delivery"
            type="radio"
            className="h-6 w-6 cursor-pointer accent-black"
          />
          <p className="flex flex-col items-start gap-2 font-sfPro text-sm font-normal leading-6 sm:flex-row sm:gap-4 sm:text-lg">
            $8.50
            <span className="text=[#17183B]">
              Get your delivery as soon as posible
            </span>
          </p>
        </div>
        <p className="font-sfPro text-sm font-normal leading-6 text-[#17183B] sm:text-lg">
          12 April, 2025
        </p>
      </div>
    </>
  );
}

export default ShipmentMethod;
