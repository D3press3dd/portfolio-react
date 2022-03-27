import { Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Home from "./components/Home";
import { LanguageContextProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <LanguageContextProvider>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="*" element={<Intro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </LanguageContextProvider>
    </>
  );
}

export default App;
