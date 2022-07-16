import styled, { css } from 'styled-components';

import { changeRgbaOpacity } from '../../../styles/utils';

export const Container = styled.div`
  border: 1px solid ${({ theme, isActive }) =>
    isActive ? changeRgbaOpacity(theme.colors.accent, .4) : theme.colors.border.primary };
  border-radius: 16px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  height: 70px;
  
  position: relative;
  padding: 24px;

  color: ${({ isActive, theme }) => isActive && theme.colors.accent};

  cursor: pointer;
`;

export const Label = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  transition: .2s;

  ${({ isFocused }) => isFocused ? css`
    font-size: 12px;
    top: 20px;
  ` : css`
    font-size: 16px;
  `}
`;

export const Input = styled.input`
  padding-top: 20px;
  display: ${({ isFocused }) => !isFocused && 'none'};
  font-size: 16px;
`;
