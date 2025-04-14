import { Thanks, H2, Paragraph } from "./styled";

export default function ThanksComponent() {
    return(
        <Thanks role="region" aria-labelledby="agradecimento-titulo">
            <H2 id="agradecimento-titulo">Obrigado pelo seu contato!</H2>
            <Paragraph>Sua mensagem foi recebida com sucesso. Retornarei o mais breve possível.</Paragraph>
            <a href="/"
            target="_self"
            role="button"
            aria-label="Voltar para o site"
            className="button">Voltar para o site</a>
        </Thanks>
    );
}