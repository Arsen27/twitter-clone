import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 16px 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

export const Left = styled.div`
  width: 48px;
`;

export const Right = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-size: 19px;
  padding: 12px 12px 8px 12px;
`;

export const CanReplyButton = styled.button`
  font-weight: 600;
  font-size: 14px;

  display: ${({ isFocused }) => isFocused ? 'flex' : 'none'};
  gap: 4px;
  width: fit-content;

  padding: 4px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding-left: 12px;
`;

export const Additions = styled.div`
  display: flex;
`;

export const Addition = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  border-radius: 50%;
`;

export const TweetButton = styled.button`
  width: fit-content;
  padding: 9px 20px;
  font-size: 14px;
`;
