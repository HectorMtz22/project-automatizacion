import { FormEvent } from "react";
import styles from "./Input.module.css";

const Input = () => {
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className={styles.form}>
      <input type="text" className={styles.input} />
      <button>Enviar</button>
    </form>
  );
};

export default Input;
