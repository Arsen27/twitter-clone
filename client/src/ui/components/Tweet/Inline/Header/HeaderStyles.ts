import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div``;

export const AuthorName = styled.span`
  font-weight: 600;
`;

export const AuthorUsername = styled.span`
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
