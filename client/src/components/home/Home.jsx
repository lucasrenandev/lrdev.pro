import { Home, Main, LeftSide, Text, H1, 
Paragraph, RightSide, Figure, Img } from "./styled";
import HomeImg from "../../assets/home-logo.png";

export default function HomeComponent() {
    return(
        <Home id="home">
            <Main data-aos="zoom-in" data-aos-delay="300">
                <LeftSide>
                    <Text>Olá, Bem-Vindo(a)</Text>
                    <H1>Eu sou <span>Lu</span>cas <br /> Re<span>nan</span></H1>
                    <Paragraph>
                        Desenvolvedor Web Front-End especializado em criação de sites modernos e responsivos.
                    </Paragraph>
                </LeftSide>
                <a href="https://wa.link/xb5tus" target="_blank" className="button">Contate-me</a>
            </Main>
            <RightSide data-aos="zoom-in" data-aos-delay="600">
                <Figure>
                    <Img src={HomeImg} alt="Logo da página principal"/>
                </Figure>
            </RightSide>
        </Home>
    );
}