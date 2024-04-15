import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getPets } from "./getPets";

type AddPrompt = (prompt: string) => Promise<void>;

export const addPrompt: AddPrompt = async (prompt) => {
  // Add a new document with a generated id.
  const pets = await getPets();
  // convierte el array de objetos en un string

  const request =
    "Contexto: " +
    JSON.stringify(pets) +
    " . Pregunta: Necesito que encuentres todos los animales que tengan algo en común con lo siguiente: " +
    prompt +
    " . Dame una lista de animales que cumplan con esta condición.";

  const docRef = await addDoc(collection(db, "generate"), {
    prompt: request,
    promptToDisplay: prompt,
  });
  console.log("Document written with ID: ", docRef.id);
};
