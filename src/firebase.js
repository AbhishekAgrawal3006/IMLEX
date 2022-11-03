// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHwXIIRdkmgPNRDAsLNNT63qJRriANFg",
  authDomain: "imlex-97d75.firebaseapp.com",
  projectId: "imlex-97d75",
  storageBucket: "imlex-97d75.appspot.com",
  messagingSenderId: "496333272931",
  appId: "1:496333272931:web:01936a4192ee8498184556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);