import styled from "styled-components";


export const StyledHeader = styled.header`
background-color: #000000;

height: 58px;
display: flex;
justify-content: space-between;
padding: 0 20px;   
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; 
    ul{
        display: flex;
    }
    ul.links{
       gap: 40px;
    }
    ul.search{
      @media (max-width: 768px) {
      display: none;
      }
    }
}
ul{
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
  @media (max-width: 768px) {
    z-index: 2;/*evita que a barra de menu fique por baixo da imagem*/
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
  font-size: 16px;
  height: 100px;
  transition: 0.3s;
  color: #FFFFFF;
  @media (max-width: 768px) {
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