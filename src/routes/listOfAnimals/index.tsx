import { useEffect, useState } from "react";
import { getPets } from "services/getPets";
import { Link } from "react-router-dom";

import styles from "./list.module.css";
import Footer from "components/Footer";
import Header from "components/Header";

const ListOfAnimals = () => {
  const [animals, setAnimals] = useState<Pets[]>([]);
  useEffect(() => {
    getPets().then((pets) => {
      setAnimals(pets);
      console.log(pets);
    });
  }, []);
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Lista de mascotas encontradas</h1>
        <section className={styles.list}>
          {animals.map((animal) => (
            <article key={animal.id} className={styles.item}>
              <h2>Nombre: {animal.name}</h2>
              <h3>{animal.type}</h3>
              <p>Color: {animal.color}</p>
              <p>Correo de Contacto: {animal.contact_email}</p>
              <p>Encontrado en: {animal.location}</p>
            </article>
          ))}
        </section>

        <Link to="add-pet" role="button">
          <button>Agregar Mascota Encontrada</button>
        </Link>

        <main className="iframe-chat">
          <button popovertarget="chatbot-ai" id="chatbot">
            <i className="fa-solid fa-comment fa-2xs"></i>
          </button>
          <iframe
            popover=""
            id="chatbot-ai"
            src="/chat"
            frameborder="0"
          ></iframe>
        </main>
      </main>
      <Footer />
    </>
  );
};

export default ListOfAnimals;
