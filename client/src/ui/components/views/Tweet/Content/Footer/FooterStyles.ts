import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Count = styled.span`
  font-size: 14px;
  margin-right: 24px;
  padding: 4px 0;
`;

export const CountNumber = styled.span`
  font-weight: 600;
  margin-right: 6px;
`;

export const CountTitle = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ActionsRow = styled.div`
  justify-content: space-around;
`;
