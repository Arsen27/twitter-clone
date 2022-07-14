import { withTheme } from 'styled-components';

import { TTheme } from '../../../styles/themes/types';
import { Container } from './DividerStyles';

export enum DividerOrientations {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export enum DividerTypes {
  Line = 'line',
  Dot = 'dot',
}

export type TDividerProps = {
  type?: DividerTypes;
  orientation?: DividerOrientations;
  show?: boolean;
  spacing?: number;
  size?: number;
  color?: (theme: TTheme) => string | string;
  theme: TTheme;
}

const BaseDivider = ({
  type = DividerTypes.Line,
  orientation = DividerOrientations.Horizontal,
  size,
  show = true,
  spacing = 0,
  color = (theme) => theme.colors.border.primary!,
  theme,
}: TDividerProps) => {
  return (
    <Container
      type={type}
      orientation={orientation}
      size={size}
      show={show}
      spacing={spacing}
      color={typeof color === 'string' ? color : color(theme)}
    />
  );
};

export default withTheme(BaseDivider);
