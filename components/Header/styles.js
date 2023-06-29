import styled from "styled-components";


export const StyledHeader = styled.header`
@media (max-width: 768px) {
  margin-bottom: 20%;
  justify-content: space-between;
}

background-color: #000000;

height: 58px;
display: flex;
justify-content: center;
padding: 0 20px;   
nav{
  @media (max-width: 768px) {
    justify-content: space-between;
  }
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px; 
    ul{
        display: flex;
    }
    ul.links{
       gap: 40px;
    }
    ul.search{
      gap: .5rem;
      input {
        padding: 6px;
        min-height: 36px;
        font-size: 15px;
        border: 1px solid #000;
    }
    
      button{
        background: none;
        color: #fff;
        font-weight: 400;
        padding: 6px;
        border: 1px solid #fff;
        font-size: 18px;
      }
      @media (max-width: 768px) {
      gap: .3rem;  
      max-width: 80%;  
      position: absolute;
      padding-top: 135px;  
      margin-left: -27px;  
      // display: none;
      button{
        max-width: 70vw;  
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        border: 1px solid #000;
        color: #000;
        text-decoration: none;
      }
      input{
        max-width: 70vw;  
        padding: 4px;
        font-size: 18px;
        border: 1px solid #000;
        min-height: 0;
      }
      }
    }
}
ul{
  @media (max-width: 1440px) {
    margin: 16px;
  }
    padding: 0;
    // margin: 512px;
    margin: 256px;
    list-style: none;
    color: #FFFFFF;
    a:link { color: inherit;
        text-decoration: none;
        }
      a:visited
         { color:inherit; }
}   
 `;

 export const NavLinks = styled.nav`
  hr{
    display: none;
  }
  display: flex;
  gap: 20px;
  @media (max-width: 1440px) {
    gap: 6px;
  }
  @media (max-width: 768px) {
    z-index: 20;/*evita que a barra de menu fique por baixo da imagem*/
    flex-direction: column;
    background-color: #343A40;
    position: fixed;
    height: 50%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 40%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;
    overflow-x: auto;                          
    &::-webkit-scrollbar {
      width: 12px;
      border-radius: 10px;
      background-color: whitesmoke; 
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: darkgray; 
    } 
    a {
      margin-top: 15px; /*assim a barra de menu fica melhor em telas menores*/
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    hr{
      display: block;
      border: 1px solid #FFFFFF;
      width: 75%;
    }
  }
`;

export const Menu = styled.div`

  margin-left: 100%;
  font-size: 30px;
  display: none;
  cursor: pointer;
  z-index: 10;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 15px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Anchor = styled.a`
@media (max-width: 1440px) {
  font-size: 14px;
}
  font-size: 16px;
  height: 100px;
  transition: 0.3s;
  color: #FFFFFF;
  @media (max-width: 768px) {
  font-size: 16px;  
  &.active {
    color: #DAFF01 !important;

  }
  
}
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
  &:link { color: #FFFFFF ;
    text-decoration: none;
    }
  &:visited
     { color: #FFFFFF; }
`;

export const Title = styled.div`
  
`;