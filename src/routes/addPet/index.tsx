import { addPet } from "services/addPet";
import styles from "./addPet.module.css";

const AddPet = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    // extract data from form
    const pet: Pets = {
      name: formData.get("nombre") as string,
      type: formData.get("type") as string,
      color: formData.get("color") as string,
      contact_email: formData.get("contact_email") as string,
      location: formData.get("location") as string,
      time_encountered: formData.get("found_at") as string,
    };

    // Add pet to database
    const response = await addPet(pet);
    if (response) {
      alert("Mascota agregada correctamente");
      form.reset();
    }
  };
  return (
    <>
      <h1>Agregar Mascota Encontrada</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" required />
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
