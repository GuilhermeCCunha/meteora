import { Modal, ModalContent, ModalHeader } from "./styles";


export default function NewsletterModal(props) {
    return (
        <Modal open>
            <ModalHeader>
                <div>
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    <p>E-mail cadastrado com sucesso!</p>
                </div>
                <button
                    onClick={props.onClose}
                >
                    X
                </button>
            </ModalHeader>
            <ModalContent>
                Em breve você receberá novidades exclusivas da Meteora.
            </ModalContent>
        </Modal>
    );
}
