import { Thanks, H2, Paragraph } from "./styled";

export default function ThanksComponent() {
    return(
        <Thanks>
            <H2>Obrigado pelo seu contato!</H2>
            <Paragraph>Sua mensagem foi recebida com sucesso. Retornarei o mais breve possível.</Paragraph>
            <a href="/" className="button">Voltar para o site</a>
        </Thanks>
    );
}