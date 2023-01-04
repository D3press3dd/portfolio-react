import useLanguages from '../context/LanguageContext';

export const OutdatedModal = () => {
  const { language } = useLanguages();
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        padding: '2rem',
        backgroundColor: '#e9322f',
      }}
    >
      <h2>
        {language === 'en'
          ? 'Outdated site, new under construction'
          : 'Sitio desactualizado, nuevo en construcción'}
      </h2>
    </div>
  );
};
