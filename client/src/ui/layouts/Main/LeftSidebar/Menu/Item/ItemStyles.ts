import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4px 0;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  align-items: center;
  width: fit-content;

  padding: 12px;

  border-radius: 9999px;

  :hover {
    background: ${({ theme }) => theme.colors.bg.highlight};
  }
`;

export const Text = styled.span`
  font-size: 20px;
  margin-right: 16px;
`;
