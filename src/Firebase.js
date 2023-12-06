// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc3N-DGDdPE7U_rfL_NrNrmcumr50weOQ",
  authDomain: "netfixgpt-e8f34.firebaseapp.com",
  projectId: "netfixgpt-e8f34",
  storageBucket: "netfixgpt-e8f34.appspot.com",
  messagingSenderId: "341580549385",
  appId: "1:341580549385:web:e630f2f61d896f31a217d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
