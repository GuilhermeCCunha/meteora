import styled from "styled-components";
import { colors } from "/styles/colors";

export const ProductsDiv = styled.div`
text-align: center;
color: ${colors.defaultTextColor};
`;

export const ProductsTitle = styled.h3`
font-size: 32px;
padding-top: 3rem;
font-weight: 500;
@media (max-width: 1440px){
    font-size: 28px;        
}
`;

export const Item = styled.div`
text-align: start;
width: 30%;
height: auto;
border: 1px solid #CCCCCC;
img{
    width: 100%;
}
@media (max-width: 1440px){
    width: 45%;    
}    
@media (max-width: 768px){
    width: 90%;
}
`
export const TextDiv = styled.div`
padding: 1rem 1rem 2rem 1rem;
`
export const Flex = styled.div`
padding-top: 2.5rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
gap: 2rem;
@media (max-width: 768px){
    flex-direction: column;
    
}
`;

export const ProductName = styled.h5`
 font-size: 23px;
 font-weight: 700;
 `;

export const ProductDescription = styled.p`
 padding: 1rem 0;
 width: 95%;
 font-size: 18px;
 `;

export const ProductPrice = styled.div`
font-weight: 700; 
font-size: 23px;
padding-bottom: 0rem;
`;

export const ProductButton = styled.button`
background-color: ${colors.primaryPurple};
text-decoration: none;
padding: .75rem 1rem;
border: none;
color: #FFF;
`;