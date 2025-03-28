import { useState } from 'react';

function DeviceDetails() {
  const [viewMore, setViewMore] = useState(false);

  const details = [
    {
      detailName: 'Screen',
      'Screen-diagonal': '6.7"',
      'The screen resolution': '2796x1290',
      'The screen refresh rate': '120 Hz',
      'The pixel density': '460 ppi',
      'Screen type': 'Super Retina XDR OLED',
      'Peak Brightness': '2000 nits',
      'Contrast Ratio': '2,000,000',
      'Touch Sampling Rate': '240 Hz',
      'HDR Support': 'HDR10',
    },
    {
      detailName: 'CPU',
      Chipset: 'Apple A17 Pro',
      Architecture: '3nm',
      'Number of cores': 'Hexa-core',
      GPU: 'Apple GPU (6-core)',
    },
    {
      detailName: 'Memory',
      RAM: '8GB',
      'Storage Options': '256GB, 512GB, 1TB',
    },
    {
      detailName: 'Cameras',
      'Rear Camera - Main': '48 MP',
      'Rear Camera - Ultra-wide': '12 MP',
      'Rear Camera - Telephoto': '12 MP, 5x optical zoom',
      'Front Camera': '12 MP, Autofocus, HDR',
    },
    {
      detailName: 'Battery',
      Capacity: '4441mAh',
      Charging: '20W wired',
      'Battery Life': '29 hours',
    },
    {
      detailName: 'Connectivity',
      SIM: 'Dual SIM (Nano + eSIM)',
      Network: '5G, LTE',
      Bluetooth: '5.3',
      'Wi-Fi': 'Wi-Fi 6E',
      NFC: 'Yes',
      USB: 'USB Type-C 3.0',
    },
    { detailName: 'Operating', OS: 'iOS 17', Updates: 'updates for 5 + years' },
    {
      detailName: 'Build',
      Material: 'Titanium frame, Ceramic Shield',
      'Water Resistance': 'IP68(6m for 30 min)',
    },
    {
      detailName: 'Physical',
      Weight: '221g',
      Dimensions: '159.9 x 76.7 x 8.3 mm',
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-10 lg:py-20">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-8 bg-[white] px-10 py-12">
        <h4 className="font-sfPro text-2xl font-medium leading-8">Details</h4>
        <p className="font-sfPro text-sm font-medium leading-6 text-[#9D9D9D]">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>

        {details.map((detail, index) => (
          <ul
            key={index}
            className={`flex flex-col gap-4 font-sfPro text-xl font-medium leading-6 ${index >= 2 && !viewMore ? 'hidden' : ''}`}
          >
            {detail.detailName}
            {Object.entries(detail).map(
              ([key, value]) =>
                key !== 'detailName' && (
                  <li
                    key={key}
                    className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base"
                  >
                    {key} <span>{value}</span>
                  </li>
                )
            )}
          </ul>
        ))}
        <button
          onClick={() => setViewMore(!viewMore)}
          className="flex items-center gap-2 self-center rounded-lg border border-[#545454] px-14 py-3 font-sfPro text-sm font-medium leading-6 hover:bg-[#F4F4F4]"
        >
          {viewMore ? 'View Less' : 'View More'}
          {viewMore ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 15L12 9L18 15" stroke="black" strokeWidth="2" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 9L12 15L6 9" stroke="black" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}

export default DeviceDetails;
