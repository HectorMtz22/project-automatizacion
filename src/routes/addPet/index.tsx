import styles from "./addPet.module.css";

const AddPet = () => {
  return (
    <>
      <h1>Agregar Mascota Encontrada</h1>
      <form className={styles.form}>
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <label>
          Tipo:
          <input type="text" name="type" required />
        </label>
        <label>
          Color:
          <input type="text" name="color" required />
        </label>
        <label>
          Correo de Contacto:
          <input type="email" name="contact_email" required />
        </label>
        <label>
          Ubicación:
          <input type="text" name="location" required />
        </label>
        <label>
          Encontrada el:
          <input type="date" name="found_at" required />
        </label>
        <button type="submit" className={styles.button}>
          Agregar
        </button>
      </form>
    </>
  );
};

export default AddPet;
