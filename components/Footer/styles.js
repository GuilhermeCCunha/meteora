import styled from "styled-components";
import { colors } from "/styles/colors";

export const StyledFooter = styled.footer`
background-color: ${colors.black};
color: ${colors.white};
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 4rem;
font-size: 13px;
font-weight: 200;
text-align: center;
a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: ${colors.white};      
    }
    &:link {
      color: ${colors.white};      
    }
    &:active {
      color: ${colors.primaryGreen}  
    }
}
`;