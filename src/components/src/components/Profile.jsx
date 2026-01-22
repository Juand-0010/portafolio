import "./Profile.css";
import perfil from "../assets/imagen-chat-hoja-de-vida.png";

export default function Profile() {
  return (
    <div className="portfolio-container">
      {/* FOTO FIJA */}
      <div className="profile-float">
        <img src={perfil} alt="Foto de perfil" />

        <div className="contact-menu">
          <a href="mailto:correo@email.com">📧 Email</a>
          <a
            href="https://wa.me/573001234567?text=Hola%20Juan%20Diego,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            🐙 GitHub
          </a>
        </div>
      </div>

      {/* CONTENIDO */}
      <section className="content">
        <h1>Hola, soy Juan Diego 👋</h1>
        <h2>Estudiante de Ingeniería de Sistemas 💻</h2>

        <p className="intro">
          Me gusta crear cosas en la web 🚀. Disfruto aprender nuevas tecnologías,
          construir proyectos desde cero y cuidar cada detalle hasta que todo
          se sienta claro, funcional y agradable.
        </p>

        <section>
          <h3>Sobre mí 🙋‍♂️</h3>
          <p>
            Soy estudiante universitario con un fuerte interés en el desarrollo
            de software y el diseño web 🎨. Me motiva transformar ideas en proyectos
            reales, experimentar con interfaces modernas y mejorar constantemente
            a través de la práctica.
          </p>
        </section>

        <section>
          <h3>Lo que hago ⚙️</h3>
          <ul>
            <li>Desarrollo de interfaces web con React ⚛️</li>
            <li>Diseño de experiencias simples y modernas ✨</li>
            <li>Creación de proyectos personales para aprender 📚</li>
            <li>Control de versiones con Git y GitHub 🔧</li>
          </ul>
        </section>

        <section>
          <h3>Tecnologías 🧠</h3>
          <ul>
            <li>React · JavaScript</li>
            <li>HTML · CSS</li>
            <li>Git · GitHub</li>
            <li>Vite</li>
          </ul>
        </section>

        <section>
          <h3>Proyectos 🗂️</h3>
          <p>
            Aquí presento algunos proyectos personales y académicos donde aplico
            lo que voy aprendiendo 🛠️, buscando siempre que sean funcionales,
            claros y bien diseñados.
          </p>
        </section>
      </section>

      {/* CONTACTOS INFERIORES */}
      <footer className="footer-contact">
        <h3>Contacto</h3>
        <div className="footer-links">
          <a href="mailto:correo@email.com">📧 Email</a>
          <a
            href="https://wa.me/573001234567?text=Hola%20Juan%20Diego,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            🐙 GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
