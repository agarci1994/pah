import { db } from "../config/firebase";
import { doc, collection, getDocs, setDoc } from "firebase/firestore";

export const getCollection = async (collectionName) => {
  console.log("aaaa")
  const dbInstance = collection(db, collectionName);

  const res = await getDocs(dbInstance);
  return res.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
};

export const createCollection = async (collectionName, value) => {
  const dbInstance = doc(collection(db, collectionName))
  console.log(collectionName)
  console.log(value)
  try {
    await setDoc(dbInstance, value, { merge: true });
    return true
  } catch (e) {
    console.log(e)
    return false
  }
};
