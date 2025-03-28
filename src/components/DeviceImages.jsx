import { useState } from 'react';

function DeviceImages() {
  const deviceImages = [
    'apple-iphone-15-pro-max-black-titanium1.webp',
    'apple-iphone-15-pro-max-black-titanium2.webp',
    'apple-iphone-15-pro-max-black-titanium3.webp',
    'apple-iphone-15-pro-max-black-titanium4.webp',
  ];
  const [selectedImage, setSelectedImage] = useState(deviceImages[0]);
  return (
    <div className="flex flex-col items-center gap-12 lg:w-1/2 xl:flex-row">
      <div className="order-2 flex items-center justify-between gap-10 lg:gap-6 xl:order-1 xl:w-1/4 xl:flex-col">
        {deviceImages.map((image, index) => (
          <img
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`w-[75px] cursor-pointer ${selectedImage === image ? 'opacity-100' : 'opacity-20'}`}
            src={`/src/assets/devices/${image}`}
            alt={image}
          />
        ))}
      </div>
      {selectedImage && (
        <img
          className="w-3/4 xl:order-2"
          src={`/src/assets/devices/${selectedImage}`}
          alt={selectedImage}
        />
      )}
    </div>
  );
}

export default DeviceImages;
