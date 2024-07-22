import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXlve1oIBf1X3rbCs5VsPbvKMnb3G7rS8",
  authDomain: "flightexpert-6e66e.firebaseapp.com",
  projectId: "flightexpert-6e66e",
  storageBucket: "flightexpert-6e66e.appspot.com",
  messagingSenderId: "660579623917",
  appId: "1:660579623917:web:24b4bc624d9c1f1151bde4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
