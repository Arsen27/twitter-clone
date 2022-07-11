import { TCustomIconProps } from '../../types';
import { Container } from './HashStyles';

type THashProps = {
} & TCustomIconProps;

const BaseIconCustomHash = ({ type, style }: THashProps) => {
  return (
    <Container
      type={type}
      style={style}
      size={style.fontSize}
    >
      #
    </Container>
  );
};

export default BaseIconCustomHash;
