import { Cta, CtaContent, H2, Paragraph } from "./styled";

export default function CtaComponent() {
    return(
        <Cta>
            <div data-aos="zoom-in" data-aos-delay="400">
                <CtaContent aria-labelledby="cta-projeto cta-descricao">
                    <H2 id="cta-projeto">Tem um projeto em mente?</H2>
                    <Paragraph id="cta-descricao">
                        Vamos transformar sua ideia em um site moderno, rápido e responsivo.
                    </Paragraph>
                    <a href="https://wa.link/xb5tus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    role="button"
                    aria-label="Link de contato do whatsapp"
                    className="button">Contate-me</a>
                </CtaContent>
            </div>
        </Cta>
    );
}