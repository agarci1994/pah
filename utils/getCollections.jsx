import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getCollection = async (collectionName) => {
  const dbInstance = collection(db, collectionName);

  const res = await getDocs(dbInstance);
  return res.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
};
