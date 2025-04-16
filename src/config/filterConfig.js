export const getFilterByCategory = (category, devices) => {
  const brands = [...new Set(devices.map((d) => d.brand))];
  const storage = [...new Set(devices.flatMap((d) => (Array.isArray(d.storage) ? d.storage : [])))];
  const computersScreen = [...new Set(devices.map((d) => typeof d.screen === 'string' ? d.screen.split(' ').slice(0, 1) + '"' : null).sort().filter(Boolean)),]
  const phonesScreen = [...new Set(devices.map(d => typeof d.screen === 'string' ? d.screen.slice(0, 3) + '"' : null).sort())];
  const processors = [...new Set(devices.map((d) => d.processor))];
  const rams = [...new Set(devices.map((d) => d.ram))];
  const sensors = [...new Set(devices.map((d) => d.sensor))];
  const videos = [...new Set(devices.map((d) => d.video))];
  const lensMounts = [...new Set(devices.map((d) => d.lensMount))];
  const types = [...new Set(devices.map((d) => d.type))];
  const bluetooth = [...new Set(devices.map((d) => d.bluetoothVersion).sort())];
  const batteryOptionsPhones = ['< 3000mAh', '3000-4000mAh', '4000-5000mAh', '5000-6000mAh', '6000mAh+',];
  const batteryOptionsSmartwatches = ['< 300mAh', '300-400mAh', '400-500mAh', '500mAh+',];

  const categoryFilters = {
    smartphones: [
      { filterName: 'Price' },
      { filterName: 'Brand', options: brands },
      { filterName: 'Storage', options: storage },
      { filterName: 'Screen', options: phonesScreen },
      { filterName: 'Battery', options: batteryOptionsPhones },
    ],
    smartwatches: [
      { filterName: 'Price' },
      { filterName: 'Brand', options: brands },
      { filterName: 'Storage', options: storage },
      { filterName: 'Screen', options: phonesScreen },
      { filterName: 'Battery', options: batteryOptionsSmartwatches },
    ],
    headphones: [
      { filterName: 'Price' },
      { filterName: 'Brand', options: brands },
      { filterName: 'Type', options: types },
      { filterName: 'Bluetooth', options: bluetooth },
    ],
    computers: [
      { filterName: 'Price' },
      { filterName: 'Brand', options: brands },
      { filterName: 'Storage', options: storage },
      { filterName: 'Screen', options: computersScreen },
      { filterName: 'Processor', options: processors },
      { filterName: 'RAM', options: rams },
    ],
    cameras: [
      { filterName: 'Price' },
      { filterName: 'Brand', options: brands },
      { filterName: 'Storage', options: storage },
      { filterName: 'Screen', options: computersScreen },
      { filterName: 'Sensor', options: sensors },
      { filterName: 'Video', options: videos },
      { filterName: 'Lens', options: lensMounts },
    ],
    gaming: [
      { filterName: 'Price' },
      { filterName: 'Brand', options: brands },
      { filterName: 'Storage', options: storage },
    ],
  };

  return categoryFilters[category] || [];
}