import styled from "styled-components";
import { colors } from "/styles/colors";

export const StyledCategories = styled.section`
text-align: center;
padding: 1.5rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
@media (max-width: 1440px) {
    margin-left: -25px;
}  
@media (max-width: 768px) {
    margin-left: -15px;
}   
`;

export const Title = styled.h2`
color: ${colors.defaultTextColor};
font-size: 28px;
font-weight: 700;   
padding-bottom: 1.5rem; 
`;

export const CategoriesDiv = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 2.5rem;
width: 87.5%;
@media (max-width: 1440px) {
    column-gap: 14%;
    }
@media (max-width: 768px) {
    row-gap: 1.2rem;
        column-gap: 5%;
    }    
`;

export const Subtitles = styled.p`
background-color: ${colors.black};
color: #FFF;
padding: .5rem;
@media (max-width: 1440px) {
width: 125%;
}
@media (max-width: 768px) {
    width: 105%;
}
`;

export const Item = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
&:link {
    text-decoration: none;
    }
@media (max-width: 1440px) {
img{
    width: 125%;
} 
}
@media (max-width: 768px) {
img{
    width: 105%;
}  
}   
`;