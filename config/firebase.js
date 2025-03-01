import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDJEg-QI_zM6D5Bsv9xx_EV89vYKGWlnMs",
    authDomain: "cyber-app-4aaaa.firebaseapp.com",
    projectId: "cyber-app-4aaaa",
    storageBucket: "cyber-app-4aaaa.firebasestorage.app",
    messagingSenderId: "600856686873",
    appId: "1:600856686873:web:e8393785d29f8dbed59588",
    measurementId: "G-PPEBTSW27Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;