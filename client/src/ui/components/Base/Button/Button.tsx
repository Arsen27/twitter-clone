import { TChildren } from '../../../../types';
import { Container } from './ButtonStyles';

export enum ButtonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Outlined = 'outlined',
}

type TButtonProps = {
  variant?: ButtonVariants;
  children: TChildren;
}

const BaseButton = ({ variant = ButtonVariants.Primary, children, ...other }: TButtonProps) => {
  return (
    <Container
      variant={variant}
      { ...other }
    >
      { children }
    </Container>
  );
};

export default BaseButton;
