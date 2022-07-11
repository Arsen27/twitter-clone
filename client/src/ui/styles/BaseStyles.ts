import { createGlobalStyle } from 'styled-components';

import { FONT_FAMILY } from './const';

export default createGlobalStyle`
  body {
    font-family: ${FONT_FAMILY};
    background: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
