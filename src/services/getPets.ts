import { db } from "../firebase";
import { query, collection, getDocs } from "firebase/firestore";

export const getPets = async () => {
  const q = query(collection(db, "pets"));

  const querySnapshot = await getDocs(q);

  const pets: Pets[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    pets.push({
      ...data,
      id: doc.id,
    } as Pets);
  });

  return pets;
};
