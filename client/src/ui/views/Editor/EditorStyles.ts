import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media (min-width: 1300px) {
    grid-template-columns: 700px 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  padding: 30px 50px;
  box-sizing: border-box;
  
  height: 100%;
`;

export const Right = styled.div`
  height: 100%;
  background: #525B72;
`;
