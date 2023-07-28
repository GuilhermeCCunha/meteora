import styled from "styled-components";
import { colors } from "/styles/colors";

export const StyledFacilities = styled.div`
background-color: ${colors.black};
padding: 2rem 1.5rem;
color: ${colors.white};
text-align: center;
margin-top: 3.3125rem;
`;

export const FacilitiesTitle = styled.h1`
font-size: 32px;
padding-bottom: 2rem;
font-weight: 500;
`;

export const FacilitiesItem = styled.div`
display: flex;
gap: 1.5rem;
text-align: start;
flex-direction: row;
justify-content: center;
width: 28%;
margin: auto;
img{
    width: 56px;
    height: 56px;
}

@media (max-width: 768px) {
    justify-content: start;
    width: auto;
    margin: 0;
}    
`;

export const FacilitiesItemText = styled.div`
h1{
    font-size: 16px;
    color: ${colors.primaryGreen};
    font-weight: 700;
}
p{
    font-weight: 200;
    padding: 1rem 0 2rem 0;
}
`;

export const FacilitiesFlexbox = styled.div`
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 1440px) {
    display: block;
}
`;