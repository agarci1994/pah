import { db } from "../config/firebase";
import { doc, collection, getDocs, setDoc } from "firebase/firestore";

export const getCollection = async (collectionName) => {
  const dbInstance = collection(db, collectionName);

  const res = await getDocs(dbInstance);
  return res.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
};

export const createCollection = async (collectionName, value) => {
  console.log(collectionName)
  console.log(value)
  const dbInstance = value.id
    ? doc(db, collectionName, value.id)
    : doc(collection(db, collectionName))
  try {
    await setDoc(dbInstance, value, { merge: true });
    return true
  } catch (e) {
    console.log(e)
    return false
  }
};
