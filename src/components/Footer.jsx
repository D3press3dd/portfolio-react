import useLanguages from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguages();
  return (
    <footer id="footer">
      <a href="https://github.com/D3press3dd/portfolio-react">
        {language === "en"
          ? `Built by © Anthony Rosman`
          : `Maquetado por © Anthony Rosman `}
      </a>
    </footer>
  );
};

export default Footer;
