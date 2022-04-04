import useLanguages from "../context/LanguageContext";
import Projects from "./Projects";
import { projects } from "../data";
import { motion } from "framer-motion";

const ProjectContainer = () => {
  const { language } = useLanguages();
  return (
    <>
      <motion.p
        className="project-intro"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {language === "en"
          ? "Some Things I’ve Built"
          : "Alguno proyectos que he desarrollado"}
      </motion.p>
      <section className="project-container-all">
        {projects.map(project => {
          return <Projects key={project.id} project={project} />;
        })}
      </section>
    </>
  );
};

export default ProjectContainer;
