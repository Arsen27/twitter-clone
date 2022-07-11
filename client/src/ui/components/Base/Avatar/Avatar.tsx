import BaseIcon, { IconTypes } from '../Icon';
import { Container, Icon } from './AvatarStyles';

type TAvatarProps = {
  size?: number
}

const BaseAvatar = ({ size = 40 }: TAvatarProps) => {
  return (
    <Container size={size}>
      <Icon>
        <BaseIcon
          name='person'
          type={IconTypes.Filled}
          size={size}
          color='#667785'
        />
      </Icon>
    </Container>
  );
};

export default BaseAvatar;
