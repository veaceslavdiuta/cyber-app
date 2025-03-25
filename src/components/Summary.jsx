function Summary() {
  return (
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
  );
}

export default Summary;
