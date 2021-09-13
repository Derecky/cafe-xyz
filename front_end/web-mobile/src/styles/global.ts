import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    background: #F5F1EF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
    font-family: Roboto !important;
  }
  button {
    cursor: pointer;
  }
  input, button {
    font-family: Roboto !important;
  }
`;