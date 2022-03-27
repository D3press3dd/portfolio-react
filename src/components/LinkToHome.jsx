import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useLanguages from "../context/LanguageContext";

const LinkToHome = () => {
  const { language } = useLanguages();
  return (
    <>
      <div className="bg"></div>
      <motion.div
        className="link-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <Link
          className="link "
          to="/home"
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 4 }}
        >
          {language === "en" ? "Get Started!" : "¡Empecemos!"}
        </Link>
      </motion.div>
    </>
  );
};

export default LinkToHome;
