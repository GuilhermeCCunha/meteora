import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: #000000;
color: #FFF;
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
      color: #FFF;      
    }
    &:link {
      color: #FFF;      
    }
}
`;