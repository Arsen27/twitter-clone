import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 12px;
  align-items: center;

  padding: 12px;
  border-radius: 9999px;

  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.bg.highlight};
  }
`;

export const Details = styled.div`
  font-size: 15px;
  line-height: 18px;
`;

export const Name = styled.span`
  display: block;
  font-weight: 700;
`;

export const UserName = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Options = styled.div`
  position: relative;
  right: 0;
`;
