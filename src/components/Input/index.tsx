import { FormEvent } from "react";
import styles from "./Input.module.css";
import { addPrompt } from "../../services/addPrompt";
import useSessionId from "../../hooks/useSessionId";

const Input = () => {
  const sessionId = useSessionId();
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const prompt = data.get("prompt") as string;
    addPrompt({ prompt, sessionId: sessionId.id })
      .then(() => {
        console.log("Prompt added");
        e.currentTarget.reset();
      })
      .catch((error) => console.error("Error adding prompt:", error));
  };
  return (
    <form onSubmit={handleForm} className={styles.form}>
      <input type="text" id="prompt" name="prompt" className={styles.input} />
      <button>Enviar</button>
    </form>
  );
};

export default Input;
