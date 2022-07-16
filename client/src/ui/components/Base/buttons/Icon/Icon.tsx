import { withTheme } from 'styled-components';

import { TTheme } from '../../../../styles/themes/types';
import { TWithThemeProp } from '../../../../styles/types';
import { getColor } from '../../../../styles/utils';
import BaseButton, { ButtonVariants } from '../../Button';
import BaseIcon, { TIconProps } from '../../Icon';
import { Container, IconWrapper, Number } from './IconStyles';

type TIconButtonProps = TIconProps & {
  icon: TIconProps & { colorHover?: (theme: TTheme) => string | string; };
  size?: number;
  number?: number;
};

const BaseButtonsIcon = ({ size = 36, number = -1, icon, theme, ...other }: TIconButtonProps & TWithThemeProp) => {
  const {
    colorHover = (theme: TTheme) => theme.colors.accent,
    color,
    ...iconProps
  } = icon;

  const getDefaultColor = () => color && getColor(color, theme);
  const getColorHover = () => colorHover && getColor(colorHover, theme);

  return (
    <Container
      as={BaseButton}
      variant={ButtonVariants.Free}
      color={getDefaultColor()}
      colorHover={getColorHover()}
      { ...other }
    >
      <IconWrapper
        size={size}
        colorHover={getColorHover()}
      >
        <BaseIcon { ...iconProps } />
      </IconWrapper>
      
      { number >= 0 && <Number>{ number }</Number> }
    </Container>
  );
};

export default withTheme(BaseButtonsIcon);
