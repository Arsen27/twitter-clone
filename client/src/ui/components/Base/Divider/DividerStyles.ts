import styled, { css } from 'styled-components';

import { DividerTypes } from './Divider';

const getStylesByType = (type: DividerTypes) => {
  const map = {
    [DividerTypes.Horizontal]: css`
      width: 100%;
      height: 1px;
    `,
    [DividerTypes.Vertical]: css`
      width: 1px;
      height: 100%;
    `,
  };

  return css`${map[type]}`;
};


export const Container = styled.div`
  background: ${({ theme }) => theme.colors.border.primary};

  ${({ type }) => getStylesByType(type)}
`;
