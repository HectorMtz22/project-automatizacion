import { db } from "../firebase";
import { getDocs, query, collection, orderBy } from "firebase/firestore";

export const getPrompts = async () => {
  const q = query(collection(db, "generate"), orderBy("createTime", "asc"));
  const querySnapshot = await getDocs(q);

  const chat: Prompt[] = [];

  querySnapshot.forEach((doc) => {
    if (doc.data().status.state === "COMPLETED") {
      chat.push(doc.data() as Prompt);
    }
  });

  return chat;
};
