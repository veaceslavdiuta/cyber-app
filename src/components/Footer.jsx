import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-8 px-8 py-12"
      style={{ background: '#181313' }}
    >
      <div className="flex flex-col items-center gap-4">
        <img src="/src/assets/LogoWhite.png" alt="Logo" />
        <p className="font-inter text-center text-[13px] font-normal leading-6 text-[#CFCFCF]">
          We are a residential interior design firm located in Portland. Our
          boutique-studio offers more than
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-sfPro text-base font-semibold leading-4 text-white">
          Services
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Bonus Program
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Gift cards
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Credit and payment
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Service contracts
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Non-cash account
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Payment
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-sfPro text-base font-semibold leading-4 text-white">
          Assistance to the buyer
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Find an order
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Terms of delivery
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Exchange and return of goods
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Guarantee
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Frequently asked questions
          </li>
          <li className="font-sfPro text-center text-sm font-light leading-8 text-[#CFCFCF]">
            Terms of use of the site
          </li>
        </ul>
      </div>

      <SocialIcons />
    </footer>
  );
}

export default Footer;
