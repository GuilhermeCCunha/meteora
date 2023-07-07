import styled from "styled-components";

export const StyledPrev = styled.span`
z-index: 5;
position: absolute;
margin-left: 2vw;
margin-top: -15%;
button{
    background: none;
    border: none;
}
@media (max-width: 1440px) {
    margin-left: 2.5vw;
    margin-top: -28%;
}
@media (max-width: 768px) {
    margin-left: 3.5vw;
    margin-top: -57.8%;  
}
`;

export const StyledNext = styled.span`
z-index: 5;
position: absolute;
right: 0;
margin-right: 2vw;
margin-top: -15%;
button{
    background: none;
    border: none;
}
@media (max-width: 1440px) {
    margin-right: 2.5vw;
    margin-top: -28%;
}
@media (max-width: 768px) {
    margin-right: 3.5vw;
    margin-top: -57.8%;  
}
`;
