import { Cta, CtaContent, H2, Paragraph } from "./styled";

export default function CtaComponent() {
    return(
        <Cta>
            <div data-aos="zoom-in" data-aos-delay="400">
                <CtaContent>
                    <H2>Tem um projeto em mente?</H2>
                    <Paragraph>
                        Vamos transformar sua ideia em um site moderno, rápido e responsivo.
                    </Paragraph>
                    <a href="https://wa.link/xb5tus" target="_blank" className="button">Contate-me</a>
                </CtaContent>
            </div>
        </Cta>
    );
}