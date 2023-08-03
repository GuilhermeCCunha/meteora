import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    a, button {
        cursor: pointer;
    }
    .default-container {
     height: 70vh;
     text-align: center;
     margin-top: 30vh;
    } 
`    