import DeviceImages from './DeviceImages';
import ServiceInfo from './ServiceInfo';

function DeviceMainInfo(props) {
  const mainFeatures = [
    {
      name: 'Screen size',
      featureProperty: props.device.screen,
      icon: 'Detail1.png',
    },
    {
      name: 'CPU',
      featureProperty:
        props.device.category == 'computers'
          ? props.device.processor
          : props.device.CPU,
      icon: 'Detail2.png',
    },
    {
      name: 'Number of Cores',
      featureProperty:
        props.device.category == 'computers'
          ? props.device.cores
          : props.device.numberOfCores,
      icon: 'Detail3.png',
    },
    {
      name: 'Main camera',
      featureProperty:
        props.device.category == 'cameras'
          ? props.device.video
          : props.device.mainCamera,
      icon: 'Detail4.png',
    },
    {
      name: 'Front-camera',
      featureProperty:
        props.device.category == 'cameras'
          ? props.device.sensor
          : props.device.frontCamera,
      icon: 'Detail5.png',
    },
    {
      name: 'Battery capacity',
      featureProperty: props.device.battery,
      icon: 'Detail6.png',
    },
  ];

  return (
    <section className="container mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-10 px-4 py-10 lg:flex-row lg:py-28">
      <DeviceImages device={props.device} />

      <div className="flex flex-col gap-4 lg:w-1/2">
        <div className="flex flex-col gap-6">
          <h2 className="font-sfPro text-[40px] font-semibold leading-10">
            {props.device.model}
          </h2>
          <p className="font-sfPro text-[32px] font-medium leading-normal">
            ${props.device.price}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <p className="font-sfPro text-base font-normal leading-6">
              Select color :
            </p>
            <div className="flex gap-2">
              <button className="h-8 w-8 rounded-full bg-black outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#781DBC] outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#E10000] outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#E1B000] outline-2 outline-offset-2 hover:outline"></button>
              <button className="h-8 w-8 rounded-full bg-[#E8E8E8] outline-2 outline-offset-2 hover:outline"></button>
            </div>
          </div>
          {/* <div className="flex gap-2 sm:gap-4">
            {props.device.storage.map((item, index) => (
              <button
                key={index}
                className="rounded-lg border border-[#D5D5D5] px-4 py-4 font-sfPro text-sm font-medium hover:border-black sm:px-6"
              >
                {item}
              </button>
            ))}
          </div> */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {mainFeatures.map((feature) => (
              <div
                key={feature.name}
                className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-4"
              >
                <img src={`/src/assets/${feature.icon}`} alt={feature.name} />
                <p className="flex flex-col font-sfPro text-sm font-medium leading-4 text-[#A7A7A7]">
                  {feature.name}
                  <span className="text-[#4E4E4E]">
                    {feature.featureProperty}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <p className="font-sfPro text-sm font-normal leading-6 text-[#6C6C6C]">
            Enhanced capabilities thanks toan enlarged display of 6.7 inches and
            work without recharging throughout the day. Incredible photos as in
            weak, yes and in bright light using the new system with two cameras.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 py-4 md:flex-row">
          <button className="rounded-md border border-black py-4 font-sfPro text-base font-medium leading-6 hover:bg-[#F4F4F4] md:w-1/2">
            Add to Wishlist
          </button>
          <button className="rounded-md border border-black bg-black py-4 font-sfPro text-base font-medium leading-6 text-white hover:opacity-60 md:w-1/2">
            Add to card
          </button>
        </div>
        <div className="flex w-full justify-between gap-8">
          <ServiceInfo
            icon="/src/assets/feature1.png"
            title="Free Delivery"
            highlight="1-2 day"
          />
          <ServiceInfo
            icon="/src/assets/feature2.png"
            title="In Stock"
            highlight="Today"
          />
          <ServiceInfo
            icon="/src/assets/feature3.png"
            title="Guaranteed"
            highlight="1 year"
          />
        </div>
      </div>
    </section>
  );
}

export default DeviceMainInfo;
