import { Footer, Paragraph } from "./styled";

export default function FooterComponent() {
    const year = new Date().getFullYear();

    return(
        <Footer>
            <Paragraph>
                &copy; <span>{year}</span> Lucas Renan. Todos os direitos reservados.
            </Paragraph>
        </Footer>
    );
}