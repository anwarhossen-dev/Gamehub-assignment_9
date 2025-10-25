


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAfSUNCSy7V9Ef24Nr0Wma4MrNUFWC1M9g",
//   authDomain: "gamehub-assignment.firebaseapp.com",
//   projectId: "gamehub-assignment",
//   storageBucket: "gamehub-assignment.firebasestorage.app",
//   messagingSenderId: "1053663065390",
//   appId: "1:1053663065390:web:76bf095bd9e819965ab6bf"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ You missed this line earlier

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfSUNCSy7V9Ef24Nr0Wma4MrNUFWC1M9g",
  authDomain: "gamehub-assignment.firebaseapp.com",
  projectId: "gamehub-assignment",
  storageBucket: "gamehub-assignment.firebasestorage.app",
  messagingSenderId: "1053663065390",
  appId: "1:1053663065390:web:76bf095bd9e819965ab6bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

// export default app;
