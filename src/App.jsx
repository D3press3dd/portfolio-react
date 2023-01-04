import { Route, Routes, useLocation } from 'react-router-dom';
import Intro from './components/Intro';
import Home from './components/Home';
import { LanguageContextProvider } from './context/LanguageContext';
import { AnimatePresence } from 'framer-motion';
import { OutdatedModal } from './components/OutdatedModal';
import { createPortal } from 'react-dom';

function App() {
  const location = useLocation();
  return (
    <>
      <LanguageContextProvider>
        {createPortal(<OutdatedModal />, document.getElementById('outdated'))}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Intro />} />
            <Route path='*' element={<Intro />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </AnimatePresence>
      </LanguageContextProvider>
    </>
  );
}

export default App;
