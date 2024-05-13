import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const addPet = async (pet: Pets) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "pets"), pet);
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
};
