import styled from 'styled-components';
import { changeRgbaOpacity } from '../../../../styles/utils';

export const Container = styled.button`
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;

  color: ${({ color }) => color};

  :hover {
    background: none;

    color: ${({ colorHover }) => colorHover} !important;

    & > div::before {
      display: block;
    }
  }
`;

export const IconWrapper = styled.div`
  position: relative;

  ::before {
    content: '';
    display: none;
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;

    background: ${({ colorHover }) => changeRgbaOpacity(colorHover, 0.1)};
    border-radius: 50%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Number = styled.span`
  font-size: 13px;
  transform: translateY(1px);
`;
