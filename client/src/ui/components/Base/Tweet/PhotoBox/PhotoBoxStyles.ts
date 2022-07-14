import styled from 'styled-components';

const GAP = '4px';

export const Container = styled.div`
  margin-top: 12px;

  width: 100%;
  height: 440px;
  display: flex;
  gap: ${GAP};

  border-radius: 20px;

  overflow: hidden;
`;

const columnStyles = `
  flex-grow: 1;
  display: flex;
  gap: ${GAP};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const LeftColumn = styled.div`
  ${columnStyles}
`;

export const RightColumn = styled.div`
  ${columnStyles}
`;

export const Image = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;

  background: url('${({ link }) => link}') no-repeat;
  background-size: cover;

  cursor: pointer;
`;
