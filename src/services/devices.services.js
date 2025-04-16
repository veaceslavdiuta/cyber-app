import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../config/firebase';

export const fetchDevices = async (category) => {
  try {
    const devicesQuery = query(collection(database, 'devices'), where('category', '==', category))
    const snapshot = await getDocs(devicesQuery);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching devices', error);
    return [];
  }
};

// Function to filter and sort devices based on selected filters, category, and sort value
export const getDevicesByFilters = (devices, selectedFilters, category, sortValue) => {
  // Step 1: Filter devices based on selectedFilters
  const filtered = devices.filter((device) => {
    // Check each filter group (e.g., Brand, Screen, Bluetooth, etc.)
    return Object.entries(selectedFilters).every(([filterName, selectedValues]) => {
      // If no values are selected for a filter, don't filter on it
      if (!selectedValues.length) return true;

      // Normalize the device's property key (convert filterName to lowercase)
      let deviceValue = device[filterName.toLowerCase()];

      // Special handling for 'Screen' filters depending on category
      if (filterName === 'Screen') {
        if (typeof deviceValue !== 'string') return false;

        if (category === 'computers' || category === 'cameras') {
          // For computers/cameras, extract only the number and add quotes (e.g., "15")
          deviceValue = deviceValue.split(' ').slice(0, 1) + '"';
        } else if (category === 'smartphones' || category === 'smartwatches') {
          // For smartphones/smartwatches, take first 3 characters and add quotes (e.g., "6.1")
          deviceValue = deviceValue.slice(0, 3) + '"';
        }
      }

      // Special handling for Bluetooth filter
      if (filterName === 'Bluetooth') {
        if (!device.bluetoothVersion) return false;
        return selectedValues.includes(device.bluetoothVersion);
      }

      // Special handling for Lens filter
      if (filterName === 'Lens') {
        if (!device.lensMount) return false;
        return selectedValues.includes(device.lensMount);
      }

      // Skip device if it doesn't have the value for this filter
      if (!deviceValue) return false;

      // If device value is an array (e.g., multiple operating systems or bands), check for overlap
      if (Array.isArray(deviceValue)) {
        return selectedValues.some(val => deviceValue.includes(val));
      }

      // Special handling for Battery filter with numeric range comparisons
      if (filterName === 'Battery') {
        if (!device.battery) return false;

        const capacity = parseInt(device.battery); // Convert battery string to number
        if (isNaN(capacity)) return false;

        // Check if battery falls within any selected range
        return selectedValues.some(range => {
          if (range === '< 3000mAh') return capacity < 3000;
          if (range === '6000mAh+') return capacity >= 6000;
          if (range === '< 300mAh') return capacity < 300;
          if (range === '500mAh+') return capacity >= 500;

          // Handle custom range like '3000-6000mAh'
          const [min, max] = range.replace('mAh', '').split('-').map(Number);
          return capacity >= min && capacity <= max;
        });
      }

      // Default check: value must be included in selected values
      return selectedValues.includes(deviceValue);
    });
  })
    // Step 2: Additional filter for price range
    .filter((device) => {
      const from = selectedFilters.priceFrom ?? 0;
      const to = selectedFilters.priceTo ?? Infinity;
      return device.price >= from && device.price <= to;
    });

  // Step 3: Sort devices by price if requested
  if (sortValue === 'Low To High') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'High To Low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Return the final filtered and sorted list
  return filtered;
};
