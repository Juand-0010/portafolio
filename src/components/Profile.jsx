import "./Profile.css";
import perfil from "../assets/imagen-chat-hoja-de-vida.png";
import TypingName from "./TypingName";

export default function Profile() {
  return (
    <div className="portfolio-container">
      {/* FOTO LATERAL CON CONTACTO */}
      <div className="profile-side">
        <img src={perfil} alt="Foto de perfil" />

        <div className="contact-mini">
          <a href="mailto:correo@email.com">📧 Email</a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Juand-0010"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 GitHub
          </a>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="content-main">
        <h1>
          Hola, soy <TypingName /> 👋
        </h1>

        <h2>Estudiante de Ingeniería de Sistemas 💻</h2>

        <p className="intro">
          Me apasiona crear soluciones tecnológicas y explorar nuevas herramientas 🚀.
          Disfruto desarrollar aplicaciones móviles y web, construir proyectos desde cero,
          integrar inteligencia artificial y bases de datos, y optimizar cada detalle
          para que la experiencia sea funcional, estética y amigable.
        </p>

        <section>
          <h3>Sobre mí 🙋‍♂️</h3>
          <p>
            Soy un estudiante universitario con un fuerte enfoque en desarrollo de software,
            análisis de datos y sistemas inteligentes. Me motiva transformar ideas en proyectos
            reales, aprender constantemente y aplicar mis conocimientos de manera práctica.
            Además, tengo experiencia trabajando con tecnologías modernas y metodologías ágiles,
            y me esfuerzo por mantener un perfil profesional y creativo en cada proyecto.
          </p>
          <p>
            Me considero una persona proactiva, organizada y con capacidad de análisis,
            siempre buscando soluciones innovadoras y eficientes. También disfruto
            participar en comunidades tecnológicas y colaborar en equipos multidisciplinarios.
          </p>
        </section>

        <section>
          <h3>Lo que hago ⚙️</h3>
          <ul>
            <li>Desarrollo de interfaces web y móviles con React y Kotlin ⚛️📱</li>
            <li>Diseño de experiencias de usuario simples, modernas y accesibles ✨</li>
            <li>Creación de proyectos personales, prototipos y sistemas educativos 📚</li>
            <li>Gestión de repositorios con Git y GitHub 🔧</li>
            <li>Implementación de análisis de datos y visualizaciones con Python y Power BI 📊</li>
            <li>Desarrollo backend dinámico con PHP y bases de datos SQL 🗄️</li>
            <li>Resolución de problemas de redes y configuración de Cisco IOS 🌐</li>
            <li>Aprendizaje continuo en IA, automatización y nuevas tecnologías 🤖</li>
          </ul>
        </section>

        <section>
          <h3>Tecnologías y herramientas 🧠</h3>
          <ul>
            <li>React · JavaScript · HTML · CSS</li>
            <li>Kotlin para Android Studio · Jetpack Compose</li>
            <li>C# · WinForms · WPF</li>
            <li>Python · TensorFlow · distilgpt2</li>
            <li>PHP · MySQL · SQL</li>
            <li>Git · GitHub · Vite</li>
            <li>Power BI · Excel</li>
            <li>Cisco IOS · Redes · Seguridad informática básica</li>
          </ul>
        </section>

        <section>
          <h3>Idiomas 🌎</h3>
          <ul>
            <li>Español: Nativo 🇨🇴</li>
            <li>Inglés: Nivel B2, en progreso de perfeccionamiento 📘</li>
          </ul>
        </section>

        <section>
          <h3>Intereses y metas 🚀</h3>
          <p>
            Me interesa la inteligencia artificial aplicada a la educación, desarrollo
            de videojuegos, proyectos de inclusión tecnológica y la mejora de la experiencia
            de usuario en aplicaciones. Mi meta es consolidarme como un desarrollador
            completo, capaz de liderar proyectos innovadores y aportar valor
            real con tecnología.
          </p>
        </section>
      </div>
    </div>
  );
}
