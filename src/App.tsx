import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import { getPrompts } from "./services/getPrompts";

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
        <section key={prompt.createTime.seconds}>
          <hr />
          <h2>You: {prompt.promptToDisplay}</h2>
          <p>Response: {prompt.response}</p>
          <hr />
        </section>
      ))}
      <Input />
    </>
  );
}

export default App;
