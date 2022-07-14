import BaseDivider, { DividerTypes, DividerOrientations } from '../../../Divider';
import BaseButton, { ButtonVariants } from '../../../Button';
import BaseIcon from '../../../Icon';
import { Container, Left, Right, AuthorName, AuthorUsername, OptionsButton, Time } from './HeaderStyles';

type THeaderProps = {
}

const BaseTweetInlineHeader = ({}: THeaderProps) => {
  return (
    <Container>
      <Left>
        <AuthorName>Elon Musk</AuthorName>
        <AuthorUsername>@elonmusk</AuthorUsername>
        <BaseDivider
          color={(theme) => theme.colors.text.secondary}
          type={DividerTypes.Dot}
          orientation={DividerOrientations.Vertical}
          spacing={5}
        />
        <Time>1h</Time>
      </Left>
        
      <Right>
        <OptionsButton
          variant={ButtonVariants.Free}
          as={BaseButton}
        >
          <BaseIcon
            name='three-dots'
          />
        </OptionsButton>
      </Right>
    </Container>
  );
};

export default BaseTweetInlineHeader;
