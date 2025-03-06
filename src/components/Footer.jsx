import SocialIcons from './SocialIcons';

function Footer() {
  const services = [
    { id: 1, service: 'Bonus program' },
    { id: 2, service: 'Gift cards' },
    { id: 3, service: 'Credit and payment' },
    { id: 4, service: 'Service contracts' },
    { id: 5, service: 'Non-cash account' },
    { id: 6, service: 'Payment' },
  ];

  const servicesBuyer = [
    { id: 1, service: 'Find an order' },
    { id: 2, service: 'Terms of delivery' },
    { id: 3, service: 'Exchange and return of goods' },
    { id: 4, service: 'Guarantee' },
    { id: 5, service: 'Frequently asked questions' },
    { id: 6, service: 'Terms of use of the site' },
  ];

  return (
    <footer className="w-full bg-black">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-8 py-12 md:items-start md:px-4 lg:py-24">
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-4 md:w-1/3 md:items-start md:gap-6">
            <img src="/src/assets/LogoWhite.png" alt="Logo" />
            <p className="text-text-grey text-center font-inter text-sm font-normal leading-6 md:text-start md:font-medium">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="font-sfPro text-base font-semibold leading-4 text-white">
              Services
            </h4>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {services.map((item) => (
                <li
                  key={item.id}
                  className="text-text-grey font-sfPro text-sm font-light leading-8"
                >
                  {item.service}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="font-sfPro text-base font-semibold leading-4 text-white">
              Assistance to the buyer
            </h4>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {servicesBuyer.map((item) => (
                <li
                  key={item.id}
                  className="text-text-grey font-sfPro text-sm font-light leading-8"
                >
                  {item.service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
