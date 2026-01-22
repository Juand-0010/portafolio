import "./Header.css";
import perfil from "../assets/perfil";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src={perfil}
          alt="Foto de perfil Juan Diego"
          className="profile-lpg"
        />

        <h1>Juan Diego García Viedma</h1>
        <h2>Estudiante de Ingeniería de Sistemas</h2>

        <p>
          Apasionado por el desarrollo de software, interfaces web modernas
          y la construcción de soluciones prácticas con tecnologías actuales
          como React, JavaScript y Git.
        </p>
      </div>
    </header>
  );
}
