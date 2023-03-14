import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD8W6tX5NfA5XdHzB09DO-_LwR-kJbqEQ",
  authDomain: "indumentaria-lacoste.firebaseapp.com",
  projectId: "indumentaria-lacoste",
  storageBucket: "indumentaria-lacoste.appspot.com",
  messagingSenderId: "410610503151",
  appId: "1:410610503151:web:11505c5668fabd5b88ba1a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)