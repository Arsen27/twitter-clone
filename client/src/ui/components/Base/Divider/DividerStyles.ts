import styled, { css } from 'styled-components';

import { DividerOrientations, DividerTypes, TDividerProps } from './Divider';

const getMarginByOrientation = (orientation: DividerOrientations, spacing: number): string => {
  const map = {
    [DividerOrientations.Horizontal]: `${spacing}px 0`,
    [DividerOrientations.Vertical]: `0 ${spacing}px`,
  };

  return map[orientation];
}

const getStylesByType = (props: Required<TDividerProps>) => {
  console.log(props);
  const { size, orientation, spacing, type } = props;
 
  const lineStylesMap = {
    [DividerOrientations.Horizontal]: `
      width: 100%;
      height: ${size || 1}px;
      margin: ${getMarginByOrientation(orientation, spacing)};
    `,
    [DividerOrientations.Vertical]: `
      width: ${size || 1}px;
      height: 100%;
      margin: ${getMarginByOrientation(orientation, spacing)};
    `,
  };

  const map = {
    [DividerTypes.Line]: lineStylesMap[orientation],
    [DividerTypes.Dot]: `
      width: ${size || 2}px;
      height: ${size || 2}px;
      margin: ${getMarginByOrientation(orientation, spacing)};
    `,
  }

  return css`${map[type]}`;
};

export const Container = styled.div`
  background: ${({ color }) => color};
  border-radius: 9999px;

  margin: ${({ margin }) => margin};

  display: ${({ show }) => show ? 'block' : 'none'};

  ${(props) => getStylesByType(props)}
`;
