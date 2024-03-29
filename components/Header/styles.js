import styled from "styled-components";
import { colors } from "/styles/colors";

export const StyledHeader = styled.header`
@media (max-width: 768px) {
  margin-bottom: ${props => props.$showSearch ? '78px' : '0'};
  justify-content: space-between;
  padding: 0 5vw;   
}

background-color: ${colors.black};

height: 58px;
display: flex;
justify-content: left;
padding: 0 39.5px;   
nav{
  @media (max-width: 768px) {
    justify-content: space-between;
  }
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 20px; 
    ul{
        display: flex;
    }
    ul.search{
      gap: .5rem;
      input {
        padding: 6px;
        min-height: 36px;
        font-size: 15px;
        border: 1px solid ${colors.black};
    }
    
      button{
        background: none;
        color: ${colors.white};
        font-weight: 400;
        padding: 6px;
        border: 1px solid ${colors.white};
        font-size: 18px;
      }
      @media (max-width: 1440px) {
        input{
          max-width: 10vw; 
          font-size: 8px;
        }
        button{
          font-size: 13px;
          min-height: 36px;
        }
      }
      @media (max-width: 768px) {
      gap: 1.7vw;  
      max-width: 80%;  
      position: absolute;
      padding-top: 135px;  
      margin-left: -27px;  
      button{
        min-width: 12vw;
        max-width: 70vw;  
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        border: 1px solid ${colors.black};
        color: ${colors.black};
        text-decoration: none;
        font-size: 18px;
        min-height: auto;
      }
      input{
        min-width: 70vw;
        max-width: 70vw;  
        padding: 4px;
        font-size: 18px;
        border: 1px solid ${colors.black};
        min-height: 0;
      }
      }
    }
}
ul{
  @media (max-width: 1440px) {
    margin-left: 7vw;
  }
    padding: 0;
    margin-left: 32vw;
    list-style: none;
    color: ${colors.white};
    a:link { color: inherit;
        text-decoration: none;
        }
      a:visited
         { color:inherit; }
}   
 `;

export const NavLinks = styled.nav`
 a:link {
      text-decoration: none;
}
  hr{
    display: none;
  }
  display: flex;
  gap: 20px;
  @media (max-width: 1440px) {
    gap: 0.1vw;
  }
  @media (max-width: 768px) {
    align-items: start !important;
    z-index: 20;
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
    button {
      margin-top: 20px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    hr{
      display: block;
      border: 1px solid ${colors.white};
      width: 100%;
    }
  }
`;

export const Menu = styled.div`
  margin-left: 80vw;
  font-size: 30px;
  display: none;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 12px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const StyledLink = styled.button`
background: none;
border: none;
&:hover {
  color: ${colors.primaryGreen} !important;  
}
@media (max-width: 1440px) {
  font-size: 13px;
}
  font-size: 16px;
  height: 32px;
  white-space: nowrap;
  transition: 0.3s;
  color: ${colors.white};
  @media (max-width: 768px) {
  font-size: 16px;
  height: 20px;  
  &.active {
    color:  ${colors.primaryGreen} !important;

  }
  
}
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
  &:link { color: ${colors.white} ;
    text-decoration: none;
    }
  &:visited
     { color: ${colors.white}; }
`;

export const Title = styled.div`
  
`;