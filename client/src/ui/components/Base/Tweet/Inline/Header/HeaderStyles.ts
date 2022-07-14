import styled from 'styled-components';

export const Container = styled.header`
  margin-top: -4px;

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

export const OptionsButton = styled.button`
  border-radius: 50%;

  padding: 5px;

  height: 36px;
  width: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text.secondary};

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
