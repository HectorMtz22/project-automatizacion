import { db } from "../firebase";
import { getDocs, query, collection } from "firebase/firestore";

export const getPrompts = async () => {
  const q = query(collection(db, "generate"));
  const querySnapshot = await getDocs(q);

  const chat: Prompt[] = [];

  querySnapshot.forEach((doc) => {
    chat.push(doc.data() as Prompt);
  });

  return chat;
};
