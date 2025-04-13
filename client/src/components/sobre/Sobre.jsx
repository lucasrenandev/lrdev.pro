import { About, AboutContent, ImageBox, Img, Content, H3, H4, Paragraph } from "./styled";
import LogoImg from "../../assets/home-logo.png";

export default function AboutComponent() {
    return(
        <About id="sobre">
            <div className="heading" data-aos="fade-left" data-aos-delay="200">
                <h2>Sobre mim</h2>
                <p>Sou um desenvolvedor dedicado e atento aos detalhes, amo o que faço e estou empenhado a oferecer resultados de alta qualidade.</p>
            </div>
            <AboutContent>
                <ImageBox data-aos="zoom-in" data-aos-delay="300">
                    <Img src={LogoImg} alt="Logo da seção sobre mim"/>
                </ImageBox>
                <Content data-aos="zoom-in" data-aos-delay="600">
                    <H3>Informações</H3>
                    <H4>Desenvolvedor Web Front-End</H4>
                    <Paragraph>
                        Sou Desenvolvedor Web Front-End especializado em criação sites modernos e responsivos. Meu foco é criar sites que não apenas sejam visualmente atraentes, mas também altamente funcionais, proporcionando aos usuários uma experiência fluida e intuitiva.
                    </Paragraph>
                    <a href="https://wa.link/xb5tus" target="_blank" className="button">Contate-me</a>
                </Content>
            </AboutContent>
        </About>
    )
}