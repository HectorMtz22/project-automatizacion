import { useEffect, useState } from "react";
import { getPets } from "services/getPets";

import styles from "./list.module.css";

const ListOfAnimals = () => {
  const [animals, setAnimals] = useState<Pets[]>([]);
  useEffect(() => {
    getPets().then((pets) => {
      setAnimals(pets);
      console.log(pets);
    });
  }, []);
  return (
    <main className={styles.container}>
      <h1>Lista de mascotas encontradas</h1>
      <section className={styles.list}>
        {animals.map((animal) => (
          <article key={animal.id}>
            <h2>Nombre: {animal.name}</h2>
            <p>Color: {animal.color}</p>
            <p>Correo de Contacto: {animal.contact_email}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ListOfAnimals;
