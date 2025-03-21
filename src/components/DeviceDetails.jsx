import { useState } from 'react';

function DeviceDetails() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <section className="w-full bg-[#FAFAFA] py-20">
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

        <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
          Screen
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Screen diagonal <span>6.7"</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            The screen resolution <span>2796x1290</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            The screen refresh rate <span>120 Hz</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            The pixel density <span>460 ppi</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Screen type <span>Super Retina XDR OLED</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Peak Brightness <span>2000 nits</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Contrast Ratio <span>2,000,000:1</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Touch Sampling Rate <span>240 Hz</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            HDR Support <span>HDR10, Dolby Vision</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Glass Protection <span>Ceramic Shield Glass</span>
          </li>
        </ul>

        <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
          CPU
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Chipset <span>Apple A17 Pro</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Architecture <span>3nm</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            Number of cores
            <span>Hexa-core (2x performance & 4x efficiency cores)</span>
          </li>
          <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
            GPU <span>Apple GPU (6-core)</span>
          </li>
        </ul>
        <div className={`flex-col gap-8 ${viewMore ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Memory
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              RAM <span>8GB</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Storage Options <span>256GB, 512GB, 1TB</span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Cameras
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Rear Camera - Main
              <span>48 MP, f/1.8, Sensor-shift OIS, Dual-Pixel PDAF</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Rear Camera - Ultra-wide
              <span>12 MP, f/2.2, 120° field of view</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Rear Camera - Telephoto
              <span>12 MP, f/2.8, 5x optical zoom, OIS</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Front Camera <span>12 MP, f/1.9, Autofocus, HDR</span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Battery
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Capacity <span>4441mAh</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Charging <span>20W wired, 15W MagSafe wireless</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Battery Life <span>Up to 29 hours video playback</span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Connectivity
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              SIM <span>Dual SIM (Nano + eSIM)</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Network <span>5G, LTE</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Bluetooth <span>5.3</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Wi-Fi <span>Wi-Fi 6E</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              NFC <span>Yes</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              USB <span>USB Type-C 3.0</span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Operating System
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              OS <span>iOS 17</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Updates <span>Guaranteed software updates for 5+ years</span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Build
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Material <span>Titanium frame, Ceramic Shield front & back</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Water Resistance <span>IP68 (6m for 30 min)</span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Sensors
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              <span>
                Face ID, Accelerometer, Gyroscope, Proximity, Barometer
              </span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Physical
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Weight <span>221g</span>
            </li>
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              Dimensions <span>159.9 x 76.7 x 8.3 mm</span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 font-sfPro text-xl font-medium leading-6">
            Colors
            <li className="flex justify-between border-b-[0.5px] border-[#CDCDCD] pb-2 text-base">
              <span>
                Natural Titanium, Blue Titanium, White Titanium, Black Titanium
              </span>
            </li>
          </ul>
        </div>

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
