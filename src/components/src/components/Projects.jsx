import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Proyectos Destacados</h2>

      <div className="projects-grid">
        <a href="https://github.com/Juand-0010/twitch-portfolio-react" target="_blank">
          <div className="project-card">
            <h3>Portafolio React</h3>
            <p>Portafolio personal desarrollado con React y diseño moderno.</p>
          </div>
        </a>

        <a href="https://github.com/Juand-0010/contador-pdf-python" target="_blank">
          <div className="project-card">
            <h3>Contador PDF</h3>
            <p>Herramienta en Python para análisis y conteo de archivos PDF.</p>
          </div>
        </a>

        <a href="https://github.com/Juand-0010/Rock-Paper-Scissors" target="_blank">
          <div className="project-card">
            <h3>Piedra Papel Tijera</h3>
            <p>Juego interactivo desarrollado con JavaScript.</p>
          </div>
        </a>
      </div>
    </section>
  );
}
