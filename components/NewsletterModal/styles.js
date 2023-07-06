import styled from "styled-components";


export const Modal = styled.dialog`
padding: 0;
width: 80vw;
margin-left: 10vw;
top:7%;
position: fixed;
z-index: 11;
border: none;
border-radius: 0px 0px 4px 4px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .25);
margin-top: 0;
`;

export const ModalHeader = styled.div`
display: flex;
padding: 1rem;
background-color: #000;
justify-content: space-between;
align-items: center;
gap: 1.3rem;
color: #FFF;
div{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    gap: 1rem;
}
button{
    background: none;
    border: none;
    color: #6C757D;
    width: 16px;
    height: 16px;
    font-size: 16px;
    font-weight: 900;
}
`;

export const ModalContent = styled.div`
font-size: 16px;
padding: 1rem 2rem;
`;