import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext({});

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguages = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);
  return { language, handleLanguageChange };
};

export default useLanguages;
