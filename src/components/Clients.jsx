/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import useLanguages from "../context/LanguageContext";

const Clients = ({
  titleEn,
  titleEs,
  descriptionEn,
  descriptionEs,
  logo,
  id,
}) => {
  const { language } = useLanguages();

  return (
    <>
      <motion.h2
        className="clients-title"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {language === "en" ? titleEn : titleEs}
      </motion.h2>
      <div className="clients-container" id={id}>
        <p className="clients-disclaimer">
          {language === "en" ? descriptionEn : descriptionEs}
        </p>
        <div className="clients-grid">
          {logo.map((client, index) => {
            return (
              <motion.a
                key={client.id + index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="clients-link"
                whileHover={{ translateY: -10 }}
              >
                <motion.img
                  className="clients-img"
                  src={client.img}
                  alt={client.name}
                  loading="lazy"
                  initial={{ opacity: 0, translateY: -38 }}
                  whileInView={{
                    opacity: 1,
                    translateY: 0,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Clients;
