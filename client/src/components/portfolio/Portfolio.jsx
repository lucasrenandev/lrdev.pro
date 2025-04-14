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
            <PortfolioContent aria-label="Lista dos modelos de site oferecidos">
                <div data-aos="zoom-in" data-aos-delay="200">
                    <Box role="group" aria-labelledby="modelo-site-academia">
                        <ImgBox>
                            <Img src={Img1} alt="Site de Acadêmia"/>
                        </ImgBox>
                        <TextContent>
                            <H3 id="modelo-site-academia">Site de Acadêmia</H3>
                            <Paragraph>Modelo de landing page moderna para academias.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                    <Box role="group" aria-labelledby="modelo-site-academia">
                        <ImgBox>
                            <Img src={Img2} alt="Site de Portfólio"/>
                        </ImgBox>
                        <TextContent>
                            <H3>Site de Portfólio</H3>
                            <Paragraph>Modelo de portfólio pessoal para profissionais criativos.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600">
                    <Box role="group" aria-labelledby="modelo-site-floricultura">
                        <ImgBox>
                            <Img src={Img3} alt="Site de floricultura"/>
                        </ImgBox>
                        <TextContent>
                            <H3 id="modelo-site-floricultura">Site de floricultura</H3>
                            <Paragraph>Modelo de site de floricultura com um layout delicado e intuitivo.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="800">
                    <Box role="group" aria-labelledby="modelo-site-dentista">
                        <ImgBox>
                            <Img src={Img4} alt="Site de dentista"/>
                        </ImgBox>
                        <TextContent>
                            <H3 id="modelo-site-dentista">Site de Dentista</H3>
                            <Paragraph>Modelo de site elegante e confiável para consultórios odontológicos.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1000">
                    <Box role="group" aria-labelledby="modelo-site-portfolio">
                        <ImgBox>
                            <Img src={Img5} alt="Site de Portfólio"/>
                        </ImgBox>
                        <TextContent>
                            <H3 id="modelo-site-portfolio">Site de Portfólio</H3>
                            <Paragraph>Modelo de portfólio pessoal para profissionais criativos.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1200">
                    <Box role="group" aria-labelledby="modelo-site-pizzaria">
                        <ImgBox>
                            <Img src={Img6} alt="Site de pizzaria"/>
                        </ImgBox>
                        <TextContent>
                            <H3 id="modelo-site-pizzaria">Site de Pizzaria</H3>
                            <Paragraph>Modelo site para pizzarias ou restaurantes.</Paragraph>
                        </TextContent>
                    </Box>
                </div>
            </PortfolioContent>
        </Portfolio>
    );
}