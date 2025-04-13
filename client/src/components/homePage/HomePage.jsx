import Header from "../header/Header";
import Home from "../home/Home";
import About from "../sobre/Sobre";
import Services from "..//servicos/Servicos";
import Portfolio from "..//portfolio/Portfolio";
import Cta from "../cta/Cta";
import Contact from "../contato/Contato";
import Footer from "../footer/Footer";

export default function HomePageComponent() {
    return(
        <> 
            <Header/>
            <Home/>
            <About/>
            <Services/>
            <Portfolio/>
            <Cta/>
            <Contact/>
            <Footer/>
        </>
    );
}