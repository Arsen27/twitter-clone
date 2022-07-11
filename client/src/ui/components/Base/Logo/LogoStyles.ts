import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Twitter = styled.div`
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateX(45%);
  padding: 2px 4px;

  font-size: 8px;

  background: ${({ theme }) => theme.colors.accent};
  border-radius: 9999px;
`;
