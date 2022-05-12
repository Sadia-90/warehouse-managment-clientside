

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzJUsGLCOEZgUs_nHAnJ29ueC_4pvQO6M",
  authDomain: "warehouse-management-client.firebaseapp.com",
  projectId: "warehouse-management-client",
  storageBucket: "warehouse-management-client.appspot.com",
  messagingSenderId: "578057004629",
  appId: "1:578057004629:web:50aba5b66f29374bc416dc"

  // apiKey:process.env.REACR_APP_apiKey,
  // authDomain:process.env.REACR_APP_authDomain,
  // projectId:process.env.REACR_APP_projectId,
  // storageBucket:process.env.REACR_APP_storageBucket,
  // messagingSenderId:process.env.REACR_APP_messagingSenderId,
  // appId:process.env.REACR_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
