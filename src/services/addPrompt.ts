import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

type AddPrompt = (prompt: string) => Promise<void>;

export const addPrompt: AddPrompt = async (prompt) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "generate"), {
    prompt,
  });
  console.log("Document written with ID: ", docRef.id);
};
