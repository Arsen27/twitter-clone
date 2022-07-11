import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  padding: 5px 12px 0 12px;
  margin-bottom: 4px;
`;

export const Content = styled.div`
`;

export const TweetButton = styled.button`
  height: 52px;
  font-size: 17px;
  margin: 8px 12px 4px 0;
`;

export const Bottom = styled.div`
  margin: 12px 0;
`;

