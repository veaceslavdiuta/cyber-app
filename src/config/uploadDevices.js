import { addDoc, collection } from "firebase/firestore";
import { database } from "./firebase";
import { devices } from "./devices";

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


