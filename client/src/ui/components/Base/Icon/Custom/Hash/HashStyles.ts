import styled from 'styled-components';

import { IconTypes } from '../../types';

export const Container = styled.div`
  font-weight: ${({ type }) => type === IconTypes.Filled ? 700 : 200 };

  width: ${({ size }) => size}px;
  display: flex;
  justify-content: center;
`;
