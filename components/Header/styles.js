import styled from "styled-components";


export const StyledHeader = styled.header`
background-color: #000000;

height: 58px;   
nav{
    display: flex;
    justify-content: space-between;
    ul{
        display: flex;
    }
    ul.links{
       gap: 40px;
    }
}
ul{
    padding: 0;
    margin: 0;
    list-style: none;
    color: #FFFFFF;
    a:link { color: inherit;
        text-decoration: none;
        }
      a:visited
         { color:inherit; }
}   
 `;