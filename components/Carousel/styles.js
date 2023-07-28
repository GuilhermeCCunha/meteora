import styled from "styled-components";
import { colors } from "/styles/colors";

export const Container = styled.div`
--swiper-pagination-bullet-inactive-color: ${colors.white};
--swiper-pagination-bullet-inactive-opacity: 0.5;
--swiper-pagination-bullet-horizontal-gap: 6px;
--swiper-navigation-color: ${colors.white};
--swiper-pagination-color: ${colors.white};
--swiper-pagination-bullet-border-radius: 0px;
--swiper-pagination-bullet-width: 42px;
--swiper-pagination-bullet-height: 4px;
--swiper-navigation-size: 0px;    
`;

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
color: ${colors.white};
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
color: ${colors.white};
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