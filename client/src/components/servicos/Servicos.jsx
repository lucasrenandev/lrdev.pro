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
            <ServicesContent aria-label="lista dos serviços oferecidos">
                <div data-aos="zoom-in" data-aos-delay="200">
                    <Box role="group" aria-labelledby="servico-dev-web">
                        <Icon aria-hidden="true">
                            <FaLaptopCode/>
                        </Icon>
                        <H3 id="servico-dev-web">Desenvolvimento Web</H3>
                        <Paragraph>
                            Criação de sites rápidos e otimizados para conversão, ideais para divulgação de produtos ou serviços.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                    <Box role="group" aria-labelledby="servico-design-responsivo">
                        <Icon aria-hidden="true">
                            <FaMobileScreen/>
                        </Icon>
                        <H3 id="servico-design-responsivo">Design Responsivo</H3>
                        <Paragraph>
                            Desenvolvimento de sites modernos que se adaptam a qualquer tela: celular, tablet ou desktop.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600">
                    <Box role="group" aria-labelledby="servico-otimizacao-performance">
                        <Icon aria-hidden="true">
                            <FaRocket/>
                        </Icon>
                        <H3 id="servico-otimizacao-performance">Otimização de Perfomance</H3>
                        <Paragraph>
                            Melhoria do tempo de carregamento e desempenho geral do site, visando melhor experiência do usuário.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="800">
                    <Box role="group" aria-labelledby="servico-animacoes-efeitos">
                        <Icon aria-hidden="true">
                            <FaStar/>
                        </Icon>
                        <H3 id="servico-animacoes-efeitos">Animações e Efeitos Interativos</H3>
                        <Paragraph>
                            Criação de animações suaves e interações que tornam a navegação mais envolvente.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1000">
                    <Box role="group" aria-labelledby="servico-conversao-design">
                        <Icon aria-hidden="true">
                            <FaPalette/>
                        </Icon>
                        <H3 id="servico-conversao-design">Conversão de Design em Código</H3>
                        <Paragraph>
                            Transformo seu layout do Figma, Adobe XD ou Photoshop em um site funcional, fiel ao design original.
                        </Paragraph>
                    </Box>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1200">
                    <Box role="group" aria-labelledby="servico-compatibilidade-navegadores">
                        <Icon aria-hidden="true">
                            <FaGlobe/>
                        </Icon>
                        <H3 id="servico-compatibilidade-navegadores">Compatibilidade entre Navegadores</H3>
                        <Paragraph>
                            Garantia de que seu site funcione perfeitamente no Chrome, Firefox, Safari, Edge e outros navegadores.
                        </Paragraph>
                    </Box>
                </div>
            </ServicesContent>
        </Services>
    );
}