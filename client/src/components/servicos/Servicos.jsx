import { Services, ServicesContent, Box, Icon, H3, Paragraph } from "./styled";
import { FaLaptopCode, FaMobileScreen, FaRocket, FaStar, FaPalette, 
FaGlobe} from "react-icons/fa6";

export default function ServicesComponent() {
    return(
        <Services id="servicos">
            <div className="heading" data-aos="fade-left" data-aos-delay="200">
                <h2>Meus serviços</h2>
                <p>Adoto uma metodologia ágil que me permite unir conhecimento, criatividade e paixão pelo desenvolvimento web para criar sites que realmente fazem a diferença.</p>
            </div>
            <ServicesContent>
                <div data-aos="zoom-in" data-aos-delay="200">
                    <Box>
                        <Icon>
                            <FaLaptopCode/>
                        </Icon>
                        <H3>Desenvolvimento Web</H3>
                        <Paragraph>
                            Criação de sites rápidos e otimizados para conversão, ideais para divulgação de produtos ou serviços.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                    <Box>
                        <Icon>
                            <FaMobileScreen/>
                        </Icon>
                        <H3>Design Responsivo</H3>
                        <Paragraph>
                            Desenvolvimento de sites modernos que se adaptam a qualquer tela: celular, tablet ou desktop.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600">
                    <Box>
                        <Icon>
                            <FaRocket/>
                        </Icon>
                        <H3>Otimização de Perfomance</H3>
                        <Paragraph>
                            Melhoria do tempo de carregamento e desempenho geral do site, visando melhor experiência do usuário.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="800">
                    <Box>
                        <Icon>
                            <FaStar/>
                        </Icon>
                        <H3>Animações e Efeitos Interativos</H3>
                        <Paragraph>
                            Criação de animações suaves e interações que tornam a navegação mais envolvente.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1000">
                    <Box>
                        <Icon>
                            <FaPalette/>
                        </Icon>
                        <H3>Conversão de Design em Código</H3>
                        <Paragraph>
                            Transformo seu layout do Figma, Adobe XD ou Photoshop em um site funcional, fiel ao design original.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1200">
                    <Box>
                        <Icon>
                            <FaGlobe/>
                        </Icon>
                        <H3>Compatibilidade entre Navegadores</H3>
                        <Paragraph>
                            Garantia de que seu site funcione perfeitamente no Chrome, Firefox, Safari, Edge e outros navegadores.
                        </Paragraph>
                    </Box>
                </div>
            </ServicesContent>
        </Services>
    );
}