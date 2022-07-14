import { createGlobalStyle } from 'styled-components';

import { FONT_FAMILY } from './const';

export default createGlobalStyle`
  body {
    font-family: ${FONT_FAMILY};
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text.primary};

    background: ${({ theme }) => theme.colors.bg.primary};
  }
`;
