import { TChildrenProp } from '../../../../../types';
import BaseButton from '../../../Base/Button/Button';
import { Container } from './SubmitButtonStyles';

type TSubmitButtonProps = {
}

const TweetCreatorSubmitButton = ({ children, ...other }: TSubmitButtonProps & TChildrenProp) => {
  return (
    <Container
      as={BaseButton}
      { ...other }
    >
      { children }
    </Container>
  );
};

export default TweetCreatorSubmitButton;
