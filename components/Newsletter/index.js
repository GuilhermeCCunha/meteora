import { useState } from "react";
import NewsletterModal from '../NewsletterModal';
import { NewsletterSection, NewsletterContent, NewsletterText, InputDiv, NewsletterEmail, NewsletterButton } from './styles'

export default function Newsletter() {
    const [modalStatus, setModalStatus] = useState(false)
    return (
        <NewsletterSection>
            <NewsletterContent>
                <NewsletterText>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</NewsletterText>
                <InputDiv>
                    <NewsletterEmail
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite seu email"
                    />
                    <NewsletterButton
                        type="button"
                        onClick={() => setModalStatus(true)}
                    >
                        Enviar
                    </NewsletterButton>
                </InputDiv>
            </NewsletterContent>

            {modalStatus ? <NewsletterModal onClose={() => setModalStatus(false)} /> : null}
        </NewsletterSection>
    )
}