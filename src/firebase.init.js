// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firbase/auth';
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;