import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  input, textarea, button {
    color: ${({ theme }) => theme.colors.text.primary};

    background: transparent;
    border: 0;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
