import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

export const signUp = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  setUser({ email: null, uid: null });
  await signOut(auth);
};