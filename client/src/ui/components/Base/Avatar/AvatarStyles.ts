import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;

  border-radius: 50%;
  background: #ccd6dd;

  position: relative;

  overflow: hidden;
`;

export const Icon = styled.div`
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
