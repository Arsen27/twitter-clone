import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  body {
  }

  input, textarea, button {
    outline: none;
  }
`;
