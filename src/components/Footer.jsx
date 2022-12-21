import useLanguages from '../context/LanguageContext';
//https://github.com/D3press3dd/portfolio-react link para colocar en el href del footer despues de hacer el readme.md
const Footer = () => {
  const { language } = useLanguages();
  return (
    <footer id='footer'>
      <div>
        <a
          href='https://github.com/D3press3dd'
          target='_blank'
          rel='noopener noreferrer'
        >
          {language === 'en'
            ? `Designed & built by Anthony Rosman©`
            : `Diseñado y maquetado por © Anthony Rosman `}
        </a>
      </div>
      <div>
        <h2>
          {language === 'en'
            ? 'Outdated site, new under construction'
            : 'Sitio desactualizado, nuevo en construcción'}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
