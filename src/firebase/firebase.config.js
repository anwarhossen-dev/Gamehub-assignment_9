import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfSUNCSy7V9Ef24Nr0Wma4MrNUFWC1M9g",
  authDomain: "gamehub-assignment.firebaseapp.com",
  projectId: "gamehub-assignment",
  storageBucket: "gamehub-assignment.appspot.com",
  messagingSenderId: "1053663065390",
  appId: "1:1053663065390:web:76bf095bd9e819965ab6bf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
