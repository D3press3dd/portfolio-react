import { motion } from "framer-motion";
import useLanguages from "../context/LanguageContext";
import { clientsLogos } from "../data";

const Clients = () => {
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
        {language === "en"
          ? "Some of the clients I have worked with"
          : "Alguno de los clientes con los que he trabajado"}
      </motion.h2>
      <div className="clients-container">
        <p className="clients-disclaimer">
          {language === "en"
            ? "*The links redirect to the main page of the business, it has nothing to do with the project in which I worked"
            : "*Los enlaces redireccionan a la pagina principal del negocio, no tiene nada que ver con el proyecto en el que trabaje"}
        </p>
        <div className="clients-grid">
          {clientsLogos.map((client, index) => {
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
