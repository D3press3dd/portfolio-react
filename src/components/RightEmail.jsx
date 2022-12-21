import { motion } from 'framer-motion';
import useLanguages from '../context/LanguageContext';

const RightEmail = () => {
  const { language } = useLanguages();

  const handleClick = e => {
    e.preventDefault();
  };

  return (
    //los estilos de este componente se encuentran en LEFTBARICON
    <motion.div
      className='email'
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: 'spring', duration: 1, delay: 0.3 }}
    >
      <a href='#' onClick={handleClick}>
        {language === 'en'
          ? 'Outdated site, new under construction'
          : 'Sitio desactualizado, nuevo en construcción'}
      </a>
    </motion.div>
  );
};

export default RightEmail;
