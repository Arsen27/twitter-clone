import { TChildrenProp } from '../../../../../types';
import { Container, Icon } from './HeaderStyles';

export type THeaderProps = {
  $icon?: JSX.Element;
}

const LayoutsMainHeader = ({ $icon, children }: THeaderProps & TChildrenProp) => {
  return (
    <Container>
      { $icon && <Icon>
        { $icon }
      </Icon> }

      { children }
    </Container>
  );
};

export default LayoutsMainHeader;
