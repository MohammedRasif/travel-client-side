// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDoTL-K9nmCCocyNZxaHQ5neBNk_CUxIM",
  authDomain: "nature-of-travel.firebaseapp.com",
  projectId: "nature-of-travel",
  storageBucket: "nature-of-travel.appspot.com",
  messagingSenderId: "987740965800",
  appId: "1:987740965800:web:04a51db3d147505dc02b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth