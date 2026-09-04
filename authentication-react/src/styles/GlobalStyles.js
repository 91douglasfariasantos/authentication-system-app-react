import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  body {
    background-color: #0f1117;
    color: #f8fafc;
    -webkit-font-smoothing: antialiased;
  }

  button, input {
    border: none;
    outline: none;
  }
`;