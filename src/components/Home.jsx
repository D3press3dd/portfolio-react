import { motion } from "framer-motion";
import useLanguages from "../context/LanguageContext";
import { clientsLogos, herramientas } from "../data";
import Clients from "./Clients";
import ContactWhatsapp from "./ContactWhatsapp";
import Footer from "./Footer";
import LanguageButton from "./LanguageButton";
import LeftBarIcons from "./LeftBarIcons";
import ProjectContainer from "./ProjectContainer";
import RightEmail from "./RightEmail";

const Home = () => {
  const { language } = useLanguages();

  return (
    <>
      {/* <div>Quizas ponga un nav luego</div> */}
      <main className="home" id="home">
        <section className="information-container" id="information">
          <motion.h1
            className="information__description"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
          >
            {language === "en"
              ? "Hi, as you saw before, my name is"
              : "Hola, como pudiste ver antes, mi nombre es"}
          </motion.h1>
          <motion.h2
            className="information__name"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Anthony Rosman.
          </motion.h2>
          <motion.h3
            className="information__name"
            initial={{ opacity: 0, translateY: 40 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {language === "en"
              ? "A dev that likes to build things for web"
              : "Un desarrollador que ama crear soluciones para la web."}
          </motion.h3>
          <motion.p
            className="information__paragraph"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {language === "en"
              ? `I’m a computer engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m living in
            Bogotá. I have knowledge in the frontend
            area since 2016 (and almost 7 years with react) i was part in the
            past of`
              : `Ingeniero en informatica especializado en la construccion (y ocasionalmente diseño) de experiencias digitales excepcionales. Actualmente, vivo en Bogotá. Estoy en el area de frontend desde 2016 (y casi 7 años con react) fui parte en el pasado de `}{" "}
            <a
              className="external-link"
              href="https://croing.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              croing
            </a>{" "}
            {language === "en" ? "an" : "un"}{" "}
            <a
              className="external-link"
              href="https://www.awwwards.com/sites/we-create-the-future-croing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "en"
                ? "awwwards site."
                : "sitio ganador de honor en awwwards."}
            </a>
          </motion.p>

          <motion.a
            className="btn"
            href={`${language === "en" ? "resumeEn.pdf" : "resumeEs.pdf"}`}
            target="_blank"
            initial={{ opacity: 0, translateX: -500 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.5 }}
          >
            {language === "en" ? "Download CV" : "Descargar CV"}
          </motion.a>
        </section>
        <LanguageButton />
        <LeftBarIcons />
        <RightEmail />
      </main>
      <Clients
        id={"clients"}
        titleEn={"Some of the clients I have worked with"}
        titleEs={"Alguno de los clientes con los que he trabajado"}
        descriptionEn={
          "*The links redirect to the main page of the business, it has nothing to do with the project in which I worked"
        }
        descriptionEs={
          "*Los enlaces redireccionan a la pagina principal del negocio, no tiene nada que ver con el proyecto en el que trabaje"
        }
        logo={clientsLogos}
      />
      <Clients
        id={"skills"}
        titleEn={"Skills and tools"}
        titleEs={"Habilidades y herramientas"}
        descriptionEn={
          "Here are a few technologies and tools I’ve been using recently. *Currently learning Next js."
        }
        descriptionEs={
          "Aquí hay algunas tecnologías y herramientas que he estado usando recientemente. *Actualmente estoy aprendiendo Next js."
        }
        logo={herramientas}
      />
      <ProjectContainer />

      <ContactWhatsapp />
      <Footer />
    </>
  );
};

export default Home;
