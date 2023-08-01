import { Content, Modal, ModalHeader, Card, Price, Description, Colors, Sizes, StyledButton, SoldBy, Info } from "./styles";
import ReactImageMagnify from 'react-image-magnify';

export default function ProductModal(props) {

    return (
        <Modal open >
            <ModalHeader>
                <div>
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    <p >Confira detalhes sobre o produto</p>
                </div>
                <button

                    onClick={props.onClose}
                >
                    X
                </button>
            </ModalHeader>
            <Content>
                <div className='ImgContainer'>
                    <ReactImageMagnify {...{
                        hoverDelayInMs: 400,
                        isActivatedOnTouch: true,
                        smallImage: {
                            alt: props.name,
                            isFluidWidth: true,
                            src: props.img.includes("//") ? `${props.img}` : `./images/desktop/imagens-cards/${props.img}.png`,
                        },
                        largeImage: {
                            src: props.img.includes("//") ? `${props.img}` : `./images/desktop/imagens-cards/${props.img}.png`,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
                <Info>
                    <Card>

                        <h3 >{props.name}</h3>
                        <Description >{props.description}</Description>
                        <hr className="hr1" />
                        <Price>R${props.price},00</Price>
                        <SoldBy>Vendido e entregue por Riachuelo</SoldBy>
                    </Card>
                    <hr className="hr2" />
                    <p className="colors" >Cores:</p>
                    <Colors>

                        <div >
                            <input type="radio" id="AzulClaro" name="cor" />
                            <label htmlFor="AzulClaro">Azul Claro</label>
                        </div>
                        <div >
                            <input type="radio" id="OffWhite" name="cor" />
                            <label htmlFor="OffWhite">Offwhite</label>
                        </div>
                        <div >
                            <input type="radio" id="Preto" name="cor" />
                            <label htmlFor="Preto">Preto</label>
                        </div>

                    </Colors>
                    <hr className="hr3" />
                    <p className="sizes">Tamanho:</p>
                    <Sizes>

                        <div >
                            <input type="radio" id="tamanhoP" name="tamanho" />
                            <label htmlFor="tamanhoP">P</label>
                        </div>
                        <div >
                            <input type="radio" id="tamanhoPP" name="tamanho" />
                            <label htmlFor="tamanhoPP">PP</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <input type="radio" id="tamanhoM" name="tamanho" />
                            <label htmlFor="tamanhoM">M</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <input type="radio" id="tamanhoG" name="tamanho" />
                            <label htmlFor="tamanhoG">G</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <input type="radio" id="tamanhoGG" name="tamanho" />
                            <label htmlFor="tamanhoGG">GG</label>
                        </div>

                    </Sizes>

                    <StyledButton>
                        Adicionar à sacola
                    </StyledButton>
                </Info>
            </Content>
        </Modal>
    );
}