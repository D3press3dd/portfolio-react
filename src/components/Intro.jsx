import { motion } from "framer-motion";
import useLanguages from "../context/LanguageContext";
import { data } from "../data";
import Background from "../img/background.jpg";
import Description from "./Description";
import LanguageButton from "./LanguageButton";
import LinkToHome from "./LinkToHome";
const Intro = () => {
  const { language } = useLanguages();
  return (
    <>
      <LanguageButton />
      <motion.div
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <img src={Background} alt="background image" />
        <motion.div className="intro-text">
          {language === "en"
            ? data.saludoEn
            : data.saludoEs.map((letra, index) => (
                <motion.p
                  className="intro-text-letter"
                  key={letra + index}
                  initial={{ opacity: 0, translateY: 100 }}
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
                  className=""
                  key={letra + index}
                  initial={{ opacity: 0, translateY: 100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.7 }}
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
