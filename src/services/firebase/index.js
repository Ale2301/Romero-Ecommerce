import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCumPGyDxm7o3vBwii_6n0tQFWrM0RjfTg",
  authDomain: "ecommerce-10449.firebaseapp.com",
  projectId: "ecommerce-10449",
  storageBucket: "ecommerce-10449.appspot.com",
  messagingSenderId: "591030922332",
  appId: "1:591030922332:web:4737b5df381aa170b80a99"
};
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)