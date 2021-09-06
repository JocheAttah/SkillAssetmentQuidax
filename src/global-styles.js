import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    margin: 0;
  }
    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
}`;
