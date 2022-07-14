import { withTheme } from 'styled-components';

import { TTheme } from '../../../../styles/themes/types';
import { TWithThemeProp } from '../../../../styles/types';
import { getColor } from '../../../../styles/utils';
import BaseButton, { ButtonVariants } from '../../Button';
import BaseIcon, { TIconProps } from '../../Icon';
import { Container, IconWrapper, Number } from './IconButtonStyles';

type TIconButtonProps = TIconProps & {
  icon: TIconProps & { colorHover?: (theme: TTheme) => string | string; };
  size?: number;
  number?: number;
};

const BaseIconButton = ({ size = 36, number = -1, icon, theme }: TIconButtonProps & TWithThemeProp) => {
  const { colorHover, color, ...iconProps } = icon;

  const getDefaultColor = () => color && getColor(color, theme);
  const getColorHover = () => colorHover && getColor(colorHover, theme);

  return (
    <Container
      as={BaseButton}
      variant={ButtonVariants.Free}
      color={getDefaultColor()}
      colorHover={getColorHover()}
    >
      <IconWrapper
        size={size}
        colorHover={getColorHover()}
      >
        <BaseIcon { ...iconProps } />
      </IconWrapper>
      
      <Number>{ number >= 0 && number }</Number>
    </Container>
  );
};

export default withTheme(BaseIconButton);
