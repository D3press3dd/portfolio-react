import useLanguages from "../context/LanguageContext";
import usaFlag from "../img/usa-flag.svg";
import spainFlag from "../img/spain-flag.svg";
import { motion } from "framer-motion";
motion;

const LanguageButton = () => {
  const { language, handleLanguageChange } = useLanguages();

  return (
    <motion.section
      onClick={handleLanguageChange}
      className="language-container"
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "spring", duration: 2 }}
    >
      <a>
        <img
          src={language === "en" ? spainFlag : usaFlag}
          className="text flag"
        ></img>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
    </motion.section>
  );
};

export default LanguageButton;
