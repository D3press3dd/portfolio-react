/* eslint-disable react/prop-types */
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { IconContext } from "react-icons";

import useLanguages from "../context/LanguageContext";
import { motion } from "framer-motion";

const Projects = ({ project }) => {
  const { language } = useLanguages();
  const {
    id,
    name,
    livePreview,
    img,
    alt,
    description,
    repository,
    technologies,
  } = project;

  const { en, es } = description;
  const { desc, list } = en;
  const { desc: descEs, list: listEs } = es;

  return (
    <>
      <section
        className={`project-container ${id % 2 === 0 ? "project-order" : ""}`}
      >
        <motion.div
          className="project-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: id * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="project-img">
            <a href={livePreview} target="_blank" rel="noreferrer noopener">
              <img className="project-img-complete" src={img} alt={alt} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-right"
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: id * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="project-name">
            <p>{language === "en" ? "Project" : "Proyecto"}</p>
            <h1>{name}</h1>
          </div>
          <div className="project-description">
            <p>{language === "en" ? desc : descEs}</p>
          </div>

          <div className="project-goal">
            <ul>
              {language === "en"
                ? list
                : listEs.map((item, index) => (
                    <li key={index + item}>{item}</li>
                  ))}
            </ul>
          </div>

          <IconContext.Provider value={{ className: "icons-2" }}>
            <div className="project-links">
              <div className="project-technologies">
                {technologies.map((item, index) => (
                  <motion.p
                    key={item + index}
                    initial={{ opacity: 0, translateY: -50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      delay: 0.5 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    {"#" + item}
                  </motion.p>
                ))}
              </div>
              <div className="project-link-gap">
                <a href={repository} target="_blank" rel="noreferrer noopener">
                  <FiGithub />
                </a>
                <a href={livePreview} target="_blank" rel="noreferrer noopener">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </IconContext.Provider>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
