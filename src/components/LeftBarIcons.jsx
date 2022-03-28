import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiCodepen } from "react-icons/fi";
import { SiCodewars, SiFreelancer } from "react-icons/si";
import { IconContext } from "react-icons";
const LeftBarIcons = () => {
  return (
    <IconContext.Provider value={{ className: "icons" }}>
      <div className="icons-container">
        <ul className="icons-list">
          <li>
            {" "}
            <a
              href="https://www.codewars.com/users/D3press3dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodewars />
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="https://github.com/D3press3dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />{" "}
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/anthonyrosman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="https://www.freelancer.com/u/Anthonyrosman20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFreelancer />
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="https://codepen.io/d3press3dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiCodepen />
            </a>{" "}
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
};

export default LeftBarIcons;
