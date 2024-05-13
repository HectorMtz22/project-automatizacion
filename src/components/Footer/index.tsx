const Footer = () => {
  return (
    <footer>
      <div className="section">
        <h2>Nosotros</h2>
        <p>
          "Mascotas perdidas en acción" es una organización dedicada a brindar
          ayuda y apoyo a las personas que han perdido a sus queridas mascotas.
          Nuestra misión es reunir a las familias con sus compañeros peludos,
          alados o escamosos, porque sabemos que una mascota no es solo un
          animal, es un miembro de la familia. Estamos comprometidos con el
          bienestar de todos los animales. Trabajamos incansablemente para
          devolver la esperanza a aquellos que han perdido a sus mascotas y para
          asegurarnos de que cada mascota tenga un hogar donde sea amada y
          cuidada. Si has perdido a tu mascota o quieres ayudar a un animal
          necesitado, únete a nosotros en nuestra búsqueda de amor y
          reencuentro. Juntos, podemos hacer que cada final sea un final feliz.
        </p>
      </div>

      <div className="footer-content">
        <div className="section">
          <h2 style={{ marginRight: "40px" }}>Contáctanos</h2>
          <p>MascotasPEA@gmail.com</p>
        </div>
        <div className="section">
          <h2>Redes sociales</h2>
          <div className="social-icons">
            <a href="#" target="_blank">
              <i className="fa-brands fa-facebook" ></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
