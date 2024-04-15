import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import { getPrompts } from "./services/getPrompts";
import styles from "./Chat.module.css";

function App() {
  const [prompts, setPrompts] = useState<null | Prompt[]>(null);

  useEffect(() => {
    getPrompts()
      .then((prompts) => {
        console.log("Prompts fetched");
        setPrompts(prompts);
      })
      .catch((error) => console.error("Error fetching prompts:", error));
  }, []);

  return (
    <>
      {prompts?.map((prompt) => (
        <main key={prompt.createTime.seconds}>
          <main className={styles.chat__container}>
            <section className={styles.chat__mine}>
              <p>{prompt.promptToDisplay}</p>
            </section>
          </main>
          <main className={styles.chat__container}>
            <section className={styles.chat__assistant}>
              <p>{prompt.response}</p>
            </section>
          </main>
        </main>
      ))}
      <Input />
    </>
  );
}

export default App;
