import { motion } from "framer-motion";

const RightEmail = () => {
  return (
    //los estilos de este componente se encuentran en LEFTBARICON
    <motion.div
      className="email"
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.3 }}
    >
      <a href="mailto:anthonyrosman20@gmail.com">Anthonyrosman20@gmail.com</a>
    </motion.div>
  );
};

export default RightEmail;
