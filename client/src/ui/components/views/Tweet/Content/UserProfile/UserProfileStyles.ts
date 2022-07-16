import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 12px;
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Username = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
