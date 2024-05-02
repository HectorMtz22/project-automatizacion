import { db } from "../firebase";
import { getDocs, query, collection, orderBy, where } from "firebase/firestore";

type GetPromts = ({
  sessionId,
}: {
  sessionId: string | null;
}) => Promise<Prompt[]>;

export const getPrompts: GetPromts = async ({ sessionId }) => {
  const q = query(
    collection(db, "generate"),
    orderBy("createTime", "asc"),
    where("sessionId", "==", sessionId)
  );
  const querySnapshot = await getDocs(q);

  const chat: Prompt[] = [];

  querySnapshot.forEach((doc) => {
    if (doc.data().status.state === "COMPLETED") {
      chat.push(doc.data() as Prompt);
    }
  });

  return chat;
};
