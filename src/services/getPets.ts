import { db } from "../firebase";
import { query, collection, getDocs } from "firebase/firestore";

export const getPets = async () => {
  const q = query(collection(db, "pets"));

  const querySnapshot = await getDocs(q);

  const pets: Pets[] = [];

  querySnapshot.forEach((doc) => {
    pets.push(doc.data() as Pets);
  });

  return pets;
};
