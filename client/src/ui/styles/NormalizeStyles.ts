import { createGlobalStyle } from 'styled-components';

import { FONT_FAMILY } from './const';

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

    font-family: ${FONT_FAMILY};

    ::placeholder {
      color: ${({ theme }) => theme.colors.text.placeholder};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
