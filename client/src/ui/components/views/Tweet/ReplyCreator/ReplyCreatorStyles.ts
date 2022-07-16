import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  grid-template-rows: auto 1fr auto;

  padding: 12px 16px;
`;

export const ReplyingTo = styled.span`
  grid-column: 2 / 4;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 12px;
`;

export const ReplyingToUsername = styled.a`
  color: ${({ theme }) => theme.colors.accent};
`;

export const Profile = styled.div``;

export const Textarea = styled.textarea`
  grid-column: ${({ wasFocused }) => wasFocused ? 'span 2' : 'span 1'};
  font-size: 18px;
  padding: 12px 0 12px 12px;
`;

export const StyledAdditions = styled.div`
  grid-column: 2;
  padding-left: 12px;
`;

export const ReplyButton = styled.button`
  grid-column: 3;
`;
