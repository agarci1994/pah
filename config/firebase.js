import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.STORAGE}`,
  messagingSenderId: `${process.env.MESSAGING}`,
  appId: `${process.env.APP_ID }`,
  measurementId: `${process.env.MEASUREMENT}`
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth();

