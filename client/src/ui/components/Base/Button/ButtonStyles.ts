import styled, { css } from 'styled-components';

import { TTheme } from '../../../styles/themes/types';
import { ButtonVariants } from './Button';

const getStylesByVariant = (variant: ButtonVariants, theme: TTheme) => {
  const map = {
    [ButtonVariants.Primary]: `
      background: ${theme.colors.accent};
      color: ${theme.colors.text.tertiary};
    `,
    [ButtonVariants.Secondary]: `
      background: ${theme.colors.bg.contrast};
      color: ${theme.colors.text.contrast};
    `,
    [ButtonVariants.Outlined]: `
      background: transparent;
      border: 1px solid ${theme.colors.border.secondary};
      color: ${theme.colors.text.primary};
    `,
  };

  return css`${map[variant]}`;
}

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  border: none;
  background: none;
  border-radius: 9999px;
  
  font-weight: 700;
  
  padding: 0 calc(height / 2);

  cursor: pointer;

  ${({ variant, theme }) => getStylesByVariant(variant, theme)}
`;
