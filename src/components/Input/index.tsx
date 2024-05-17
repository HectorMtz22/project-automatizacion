import { FormEvent, useState } from "react";
import styles from "./Input.module.css";
import { addPrompt } from "../../services/addPrompt";
import useSessionId from "../../hooks/useSessionId";

const Input = ({ handleLoading }: { handleLoading: () => void }) => {
  const [prompt, setPrompt] = useState<string>("");
  const sessionId = useSessionId();
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const prompt = data.get("prompt") as string;
    handleLoading();
    addPrompt({ prompt, sessionId: sessionId.id })
      .then(() => {
        console.log("Prompt added");
        setPrompt("");
      })
      .catch((error) => console.error("Error adding prompt:", error));
  };
  return (
    <form onSubmit={handleForm} className={styles.form}>
      <input
        type="text"
        id="prompt"
        name="prompt"
        className={styles.input}
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Input;
