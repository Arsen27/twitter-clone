import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Left = styled.div`
  width: 275px;
  padding: 0 12px;
`;

export const Content = styled.div`
  width: 600px;
  border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-left: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

export const Right = styled.div`
  margin-left: 42px;
  width: 348px;
`;
