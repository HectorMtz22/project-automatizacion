import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getPets } from "./getPets";
import { getPrompts } from "./getPrompts";

type AddPrompt = (prompt: string) => Promise<void>;

export const addPrompt: AddPrompt = async (prompt) => {
  // Add a new document with a generated id.
  const pets = await getPets();
  const prompts = await getPrompts();
  // convierte el array de objetos en un string

  console.log(prompts);

  const request =
    "Contexto: " +
    JSON.stringify(pets) +
    " . Pregunta: Puede que te dé argumentos de animales que busques o simplemente que me respondas acorde: " +
    prompt;

  const docRef = await addDoc(collection(db, "generate"), {
    prompt: request,
    promptToDisplay: prompt,
  });
  console.log("Document written with ID: ", docRef.id);
};
