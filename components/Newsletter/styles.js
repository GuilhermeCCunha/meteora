import styled from "styled-components";
import { colors } from "/styles/colors";

export const NewsletterSection = styled.section`
padding: 1.78125rem 1.74125rem;
font-size: 0;
display: flex;
justify-content: center;
color: ${colors.defaultTextColor};
`;

export const NewsletterContent = styled.div`
width: 50%;
padding: 2.5rem 3.75rem;
border: 1px solid ${colors.black};
text-align: center;
@media (max-width: 1440px){
    width: 80%;
}    
@media (max-width: 768px){
    width: auto;
    padding: 1.5rem 1rem;    
}
`;

export const NewsletterText = styled.p`
margin-bottom: 1.5rem;
line-height: 23px;
font-size: 20px;
@media (max-width: 768px) {
    font-size: 16px;
}
`;

export const InputForm = styled.form`
display: flex;
justify-content: center;
flex-wrap: nowrap;
align-items: center;
`;

export const NewsletterEmail = styled.input`
padding: .5rem 1rem;
margin-right: 0;
font-size: 16px;
width: 50%;
@media (max-width: 768px) {
    width: 100%;
}
`;

export const NewsletterButton = styled.button`
color: #fff;
margin-left: 0;
background-color: ${colors.primaryPurple};
border: none;
font-size: 16px;
cursor:pointer;
padding: .625rem 1.5rem;
&:hover{
    background-color: #5d1dca;
}
@media (max-width: 768px) {
    padding: .625rem;
}
`;