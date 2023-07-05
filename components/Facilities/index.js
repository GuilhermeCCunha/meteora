import { StyledFacilities, FacilitiesTitle, FacilitiesItem, FacilitiesItemText, FacilitiesFlexbox } from './styles';

export default function Facilities() {
    return (
        <StyledFacilities>
            <FacilitiesTitle>Conheça todas as nossas facilidades</FacilitiesTitle>
            <FacilitiesFlexbox>
                <FacilitiesItem>
                    <img src="./images/Desktop/Ícones/x-diamond (2).png" alt="Pagamento pelo pix" />
                    <FacilitiesItemText>
                        <h1>PAGUE PELO PIX</h1>
                        <p>Ganhe 5% OFF em pagamentos via PIX</p>
                    </FacilitiesItemText>
                </FacilitiesItem>

                <FacilitiesItem>
                    <img src="./images/Desktop/Ícones/arrow-repeat (2).png" alt="Troca Grátis" />
                    <FacilitiesItemText>
                        <h1>TROCA GRÁTIS</h1>
                        <p>Fique livre para trocar em até 30 dias.</p>
                    </FacilitiesItemText>
                </FacilitiesItem>
                <FacilitiesItem>
                    <img src="./images/Desktop/Ícones/flower1 (3).png" alt="SUSTENTABILIDADE" />
                    <FacilitiesItemText>
                        <h1>SUSTENTABILIDADE</h1>
                        <p>Moda responsável, que respeita o meio ambiente.</p>
                    </FacilitiesItemText>
                </FacilitiesItem>
            </FacilitiesFlexbox>
        </StyledFacilities>
    );
}