import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createCollection } from "./getCollections";

export const uploadFile = async (folder, user, obj, fichas) => {
  try {
    const storageFolder = ref(storage, folder + '/' + user + '/' + obj.file.name)
    const snapshot = await uploadBytes(storageFolder, obj.file)
    const url = await getDownloadURL(snapshot.ref)
    obj = { ...obj, file: url, id: obj.file.lastModified };
    fichas.files = fichas.files ? [...fichas.files, obj] : [obj]
    await createCollection("fichas", fichas)
    return true
  } catch (e) {
    console.log(e)
  }
}
