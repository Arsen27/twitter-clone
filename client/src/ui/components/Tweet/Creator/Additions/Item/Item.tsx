import BaseButtonIcon from '../../../../Base/buttons/Icon';
import { Container } from './ItemStyles';

type TItemProps = {
  icon: string;
}

const TweetCreatorAdditionsItem = ({ icon }: TItemProps) => {
  return (
    <Container
      as={BaseButtonIcon}
      icon={{
        name: icon,
        size: 17,
      }}
    />
  );
};

export default TweetCreatorAdditionsItem;
