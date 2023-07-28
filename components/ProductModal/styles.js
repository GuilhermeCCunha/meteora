import styled from "styled-components";
import { colors } from "/styles/colors";

export const Modal = styled.dialog`
padding: 0;
width: 80vw;
margin-left: 10vw;
height: 95vh;
overflow: auto;
position: fixed;
z-index: 11;
border: none;
border-radius: 0px 0px 4px 4px;
box-shadow: 0px 0px 0px 99999px rgba(0, 0, 0, .75);
top: 2%;
bottom: 2%;
text-align: left;
color: ${colors.defaultTextColor};
@media (max-width: 768px) {
    margin-left: 5vw;
    width: 90vw;
}    
`;



export const ModalHeader = styled.div`
display: flex;
padding: 1rem;
background-color: ${colors.black};
justify-content: space-between;
align-items: center;
gap: 1.3rem;
color: ${colors.white};
button{
    background: none;
    border: none;
    color: #6C757D;
    width: 16px;
    height: 16px;
    font-size: 16px;
    font-weight: 900;

}
div{
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    gap: 1rem;
    
}    
`;

export const Content = styled.div`
padding: 1rem 2rem;
display: flex;
font-size: 13px;
div.ImgContainer{
    min-width: 42%;
    max-width: 50%;
    height: auto;
}
input {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid #ccc;

    &:checked {
        box-shadow: inset 0 0 0 2.5px ${colors.primaryPurple}; 

    }
    &#AzulClaro {
        background-color: #75D7F0;
    }
    &#OffWhite {
        background-color: #F3F6F7;
    }
    &#Preto {
        background-color: ${colors.black};
    }

}
@media (max-width: 768px) {
    div.ImgContainer{
        min-width: 100%;
        height: auto;
    }
display: block;    
width: 100%;
}
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`;

export const SoldBy = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #ADB5BD;
`;

export const Price = styled.p`
font-size: 20px;
font-weight: 500;
`;

export const Description = styled.p`
font-size: 13px;
`;

export const Colors = styled.div`
display: flex;
gap: 1rem;
`;

export const Sizes = styled.div`
display: flex;
gap: 1rem;
padding-bottom: 1.5rem;
`;

export const StyledButton = styled.button`
border: none;
cursor: pointer;
background-color: ${colors.primaryPurple};
color: ${colors.white};
padding: .5rem 1rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-family: Inter;
font-weight: 200;
`;

export const Info = styled.div`
padding: 0 2rem;
p.colors{
    font-weight: 700;
    margin-bottom: 12px;
}
p.sizes{
    font-weight: 700;
    margin-bottom: 12px;
}
hr{
    height: 0.1vh;
}
hr.hr1{
    background-color: ${colors.black}; 
    border: 0;
 }
hr.hr2{
    background-color: #D8D8D8;
    margin: 1rem 0;
    border: 0;
   
}
hr.hr3{
    background-color: #D8D8D8;
    margin: 1rem 0;
    border: 0;
   
}
`;

