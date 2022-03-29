import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiCodepen } from "react-icons/fi";
import { SiCodewars, SiFreelancer } from "react-icons/si";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
const LeftBarIcons = () => {
  return (
    <IconContext.Provider value={{ className: "icons" }}>
      <motion.div
        className="icons-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ul className="icons-list">
          <motion.li
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
          >
            {" "}
            <a
              href="https://www.codewars.com/users/D3press3dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodewars />
            </a>{" "}
          </motion.li>

          <motion.li
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {" "}
            <a
              href="https://github.com/D3press3dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />{" "}
            </a>{" "}
          </motion.li>

          <motion.li
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {" "}
            <a
              href="https://www.linkedin.com/in/anthonyrosman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>{" "}
          </motion.li>

          <motion.li
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            {" "}
            <a
              href="https://www.freelancer.com/u/Anthonyrosman20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFreelancer />
            </a>{" "}
          </motion.li>

          <motion.li
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            {" "}
            <a
              href="https://codepen.io/d3press3dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiCodepen />
            </a>{" "}
          </motion.li>
        </ul>
      </motion.div>
    </IconContext.Provider>
  );
};

export default LeftBarIcons;
