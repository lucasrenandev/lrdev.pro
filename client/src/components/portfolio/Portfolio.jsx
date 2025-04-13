import { Portfolio, PortfolioContent, Box, ImgBox, Img,
TextContent, H3, Paragraph } from "./styled";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";

export default function PortfolioComponent() {
    return(
        <Portfolio id="projetos">
            <div className="heading" data-aos="fade-left" data-aos-delay="200">
                <h2>Meus projetos</h2>
                <p>Modelos de sites desenvolvidos focados em design responsivo, funcionalidade e boa experiência do usuário.</p>
            </div>
            <PortfolioContent>
                <div data-aos="zoom-in" data-aos-delay="200">
                    <Box>
                        <ImgBox>
                            <Img src={Img1} alt="Imagem de site de Acadêmia"/>
                        </ImgBox>
                        <TextContent>
                            <H3>Site de Acadêmia</H3>
                            <Paragraph>Modelo de landing page moderna para academias.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                    <Box>
                        <ImgBox>
                            <Img src={Img2} alt="Imagem de site de Portfólio"/>
                        </ImgBox>
                        <TextContent>
                            <H3>Site de Portfólio</H3>
                            <Paragraph>Modelo de portfólio pessoal para profissionais criativos.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600">
                    <Box>
                        <ImgBox>
                            <Img src={Img3} alt="Imagem de site de viajens"/>
                        </ImgBox>
                        <TextContent>
                            <H3>Site de Viajens</H3>
                            <Paragraph>Modelo de site para agência de viagens.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="800">
                    <Box>
                        <ImgBox>
                            <Img src={Img4} alt="Imagem de site de dentista"/>
                        </ImgBox>
                        <TextContent>
                            <H3>Site de Dentista</H3>
                            <Paragraph>Modelo de site elegante e confiável para consultórios odontológicos.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1000">
                    <Box>
                        <ImgBox>
                            <Img src={Img5} alt="Imagem de site de Portfólio"/>
                        </ImgBox>
                        <TextContent>
                            <H3>Site de Portfólio</H3>
                            <Paragraph>Modelo de portfólio pessoal para profissionais criativos.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1200">
                    <Box>
                        <ImgBox>
                            <Img src={Img6} alt="Imagem de site de pizzaria"/>
                        </ImgBox>
                        <TextContent>
                            <H3>Site de Pizzaria</H3>
                            <Paragraph>Modelo site para pizzarias ou restaurantes.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
            </PortfolioContent>
        </Portfolio>
    )
}