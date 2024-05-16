import { useState, useEffect } from "react";
import Input from "components/Input";
import { getPrompts } from "services/getPrompts";
import styles from "./Chat.module.css";
import useSessionId from "hooks/useSessionId";

const INITIAL_PROMPT =
  "¡Hola! ¿En qué puedo ayudarte hoy? Estaré encantado de buscar en nuestra base de datos para encontrar una mascota que coincida con tus criterios. ¿Qué tipo de mascota estás buscando? Si no estás seguro, estaré encantado de guiarte a través de algunas preguntas para ayudarte a reducir tus opciones";

const Chat = () => {
  const [prompts, setPrompts] = useState<null | Prompt[]>(null);
  const [error, setError] = useState<null | string>(null);
  const sessionId = useSessionId();
  if (!sessionId.id) sessionId.setSessionId();

  useEffect(() => {
    getPrompts({
      sessionId: sessionId.id,
    })
      .then(({ chat, error }) => {
        console.log("Prompts fetched");
        setPrompts(chat);
        setError(
          error
            ? "Estamos teniendo problemas con Google AI. Intente más tarde..."
            : null
        );
      })
      .catch((error) => console.error("Error fetching prompts:", error));
  }, [sessionId.id]);

  return (
    <article className={styles.container}>
      <main>
        <main></main>
        <main className={styles.chat__container}>
          <section className={styles.chat__assistant}>
            <p>{INITIAL_PROMPT}</p>
          </section>
        </main>
      </main>
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
      {error && (
        <main className={styles.chat__container}>
          <section className={styles.chat__assistant}>
            <p>{error}</p>
          </section>
        </main>
      )}
      <Input />
    </article>
  );
};

export default Chat;
