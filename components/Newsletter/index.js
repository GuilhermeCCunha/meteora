import { useState } from "react";
import NewsletterModal from '../NewsletterModal';
import { NewsletterSection, NewsletterContent, NewsletterText, NewsletterEmail, NewsletterButton, InputForm } from './styles'

export default function Newsletter() {
    const [modalStatus, setModalStatus] = useState(false)
    return (
        <NewsletterSection>
            <NewsletterContent>
                <NewsletterText>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</NewsletterText>
                <InputForm onSubmit={(event) => { event.preventDefault(); setModalStatus(true) }}>
                    <NewsletterEmail
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite seu email"
                        required
                    />
                    <NewsletterButton
                        type="submit"
                    >
                        Enviar
                    </NewsletterButton>
                </InputForm>
            </NewsletterContent>

            {modalStatus ? <NewsletterModal onClose={() => setModalStatus(false)} /> : null}
        </NewsletterSection>
    )
}