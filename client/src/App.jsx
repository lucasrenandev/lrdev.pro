import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./components/homePage/HomePage";
import Thanks from "./components/agradecimento/Agradecimento";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/agradecimento" element={<Thanks/>}/>
      </Routes>
    </>
  )
}