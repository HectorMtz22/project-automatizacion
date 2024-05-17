import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="orange-box">
          <i className="fas fa-paw"></i>
        </div>
        <div className="header-text">
          <h1>Mascotas perdidas en acción</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Perdí a mi mascota</a>
            </li>
            <li>
              <a href="#">Mascotas desaparecidas</a>
            </li>
            <li>
              <a href="#">Refugios</a>
            </li>
            <li>
              <a href="#">
                <button className="sesion-usuario" type="button">
                  <i className="fas fa-user"></i> Héctor
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="header-eslogan">
        <h2>Recuerda que tú puedes hacer la diferencia en sus vidas</h2>
        <img
          className="perro-header"
          src="/imagenes/perro1.jpg"
          alt="Texto Alternativo de la Imagen"
        />
      </div>
    </>
  );
};

export default Header;
