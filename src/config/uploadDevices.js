import { addDoc, collection } from "firebase/firestore";
import { database } from "./firebase";

const devices = [
  {
    name: "iPhone 15 Pro Max",
    category: "smartphones",
    brand: "Apple",
    price: 1299,
    features: {
      RAM: "8GB",
      Storage: "256GB",
      Battery: "4422mAh",
      Camera: "48MP + 12MP + 12MP",
      Display: "6.7-inch OLED, 120Hz",
      Processor: "A17 Pro",
      Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      OS: "iOS 17"
    }
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    category: "smartphones",
    brand: "Samsung",
    price: 1199,
    features: {
      RAM: "12GB",
      Storage: "512GB",
      Battery: "5000mAh",
      Camera: "200MP + 12MP + 10MP + 10MP",
      Display: "6.8-inch Dynamic AMOLED, 120Hz",
      Processor: "Snapdragon 8 Gen 2",
      Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      OS: "Android 13"
    }
  },
  {
    name: "Google Pixel 8 Pro",
    category: "smartphones",
    brand: "Google",
    price: 999,
    features: {
      RAM: "12GB",
      Storage: "256GB",
      Battery: "4950mAh",
      Camera: "50MP + 48MP + 12MP",
      Display: "6.7-inch OLED, 120Hz",
      Processor: "Tensor G3",
      Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      OS: "Android 14"
    }
  },
  {
    name: "OnePlus 11",
    category: "smartphones",
    brand: "OnePlus",
    price: 799,
    features: {
      RAM: "16GB",
      Storage: "512GB",
      Battery: "5000mAh",
      Camera: "50MP + 48MP + 32MP",
      Display: "6.7-inch AMOLED, 120Hz",
      Processor: "Snapdragon 8 Gen 2",
      Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3",
      OS: "Android 13"
    }
  },
  {
    name: "Xiaomi 13 Ultra",
    category: "smartphones",
    brand: "Xiaomi",
    price: 1099,
    features: {
      RAM: "16GB",
      Storage: "1TB",
      Battery: "5000mAh",
      Camera: "50MP + 50MP + 50MP + 50MP",
      Display: "6.73-inch AMOLED, 120Hz",
      Processor: "Snapdragon 8 Gen 2",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
      OS: "Android 13"
    }
  },
  {
    name: "Sony Xperia 1 V",
    category: "smartphones",
    brand: "Sony",
    price: 1299,
    features: {
      RAM: "12GB",
      Storage: "256GB",
      Battery: "5000mAh",
      Camera: "48MP + 12MP + 12MP",
      Display: "6.5-inch OLED, 120Hz",
      Processor: "Snapdragon 8 Gen 2",
      Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      OS: "Android 13"
    }
  },
  {
    name: "Nothing Phone (2)",
    category: "smartphones",
    brand: "Nothing",
    price: 699,
    features: {
      RAM: "12GB",
      Storage: "512GB",
      Battery: "4700mAh",
      Camera: "50MP + 50MP",
      Display: "6.7-inch AMOLED, 120Hz",
      Processor: "Snapdragon 8+ Gen 1",
      Connectivity: "5G, Wi-Fi 6, Bluetooth 5.2",
      OS: "Android 13"
    }
  },
  {
    name: "Asus ROG Phone 7 Ultimate",
    category: "smartphones",
    brand: "Asus",
    price: 1499,
    features: {
      RAM: "16GB",
      Storage: "1TB",
      Battery: "6000mAh",
      Camera: "50MP + 13MP + 5MP",
      Display: "6.78-inch AMOLED, 165Hz",
      Processor: "Snapdragon 8 Gen 2",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
      OS: "Android 13"
    }
  },
  {
    name: "Huawei P60 Pro",
    category: "smartphones",
    brand: "Huawei",
    price: 999,
    features: {
      RAM: "8GB",
      Storage: "512GB",
      Battery: "4815mAh",
      Camera: "50MP + 48MP + 13MP",
      Display: "6.67-inch OLED, 120Hz",
      Processor: "Snapdragon 8+ Gen 1",
      Connectivity: "4G, Wi-Fi 6, Bluetooth 5.2",
      OS: "HarmonyOS"
    }
  },
  {
    name: "Realme GT 3",
    category: "smartphones",
    brand: "Realme",
    price: 599,
    features: {
      RAM: "16GB",
      Storage: "1TB",
      Battery: "4600mAh",
      Camera: "50MP + 8MP + 2MP",
      Display: "6.74-inch AMOLED, 144Hz",
      Processor: "Snapdragon 8+ Gen 1",
      Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3",
      OS: "Android 13"
    }
  }
];

const uploadDevices = async () => {
  try {
    const devicesCollection = collection(database, 'devices');

    for (const device of devices) {
      await addDoc(devicesCollection, device);
    }
  } catch (error) {
    console.error("Error uploading devices:", error);
  }
}

uploadDevices();
