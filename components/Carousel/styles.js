import styled from "styled-components";

export const StyledImage = styled.div`
background-color: #895fb5; //#9353FF; 
img.img1{
    width: 100vw;
    display: block; 
}
img.img2{
    display: none; 
}
img.img3{
    display: none; 
}
@media (max-width: 1440px) {
    img.img1{
        display: none; 
    }
    img.img2{
        width: 100vw;
        display: block; 
    } 
}
@media (max-width: 768px) {
    img.img1{
        display: none; 
    }
    img.img2{
        display: none; 
    }
    img.img3{
        width: 100vw;
        display: block; 
    } 
}
`;

export const StyledDiv = styled.div`
position: absolute;
// bottom: 240px;
// left: 150px;
top: 162px;
left: 166px;
color: #FFF;
@media (max-width: 1440px) {
    top: 168px;
    left: 99px;
}
@media (max-width: 768px) {
    top: 232px;
    left: 20px;
    font-size: 11px;  
}
`;

export const StyledDiv2 = styled.div`
position: absolute;
// bottom: 240px;
// left: 150px;
top: 163px;
left: 800px;
color: #FFF;
@media (max-width: 1440px) {
    top: 168px;
    left: 440px;
}
@media (max-width: 768px) {
    top: 232px;
    left: 20px;
    font-size: 11px;  
}
`;