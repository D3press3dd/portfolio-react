import useLanguages from "../context/LanguageContext";
import { data } from "../data";
import Background from "../img/background.jpg";
import Description from "./Description";
import LanguageButton from "./LanguageButton";
import LinkToHome from "./LinkToHome";
import { motion } from "framer-motion";

const Intro = () => {
  const { language } = useLanguages();
  console.log(
    "%c👀👀¿Que haces aqui en las developer tools?👀👀",
    "color: #e9322f; font-size: 20px; background: #f9f9f9; padding: 10px; border-radius: 5px; box-shadow: 0 0 10px #e9322f;"
  );

  console.log(
    "%cSi quieres ver el codigo fuente, esta en mi repositorio, si lo usas de inspiracion dejame una estrella",
    "color: #e9322f; font-size: 16px; background: #f9f9f9; padding: 10px; border-radius: 5px; box-shadow: 0 0 10px #e9322f;"
  );

  return (
    <>
      <LanguageButton />
      <motion.div
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <img src={Background} alt="background image" />
        <motion.div className="intro-text">
          {language === "en"
            ? data.saludoEn
            : data.saludoEs.map((letra, index) => (
                <motion.p
                  className="intro-text"
                  key={letra + index}
                  initial={{ opacity: 0, translateY: 150 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.5 }}
                >
                  {letra}
                </motion.p>
              ))}
        </motion.div>
        <motion.div className="intro-text">
          {language === "en"
            ? data.saludoEnSecond
            : data.saludoEsSecond.map((letra, index) => (
                <motion.p
                  className="intro-text"
                  key={letra + index}
                  initial={{ opacity: 0, translateY: 150 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.5 }}
                >
                  {letra}
                </motion.p>
              ))}
        </motion.div>
        <Description />
      </motion.div>

      <LinkToHome />
    </>
  );
};

export default Intro;
