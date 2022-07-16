import BaseDivider, { DividerTypes, DividerOrientations } from '../../../Base/Divider';
import BaseIconButton from '../../../Base/buttons/Icon';
import { Container, Left, Right, AuthorName, AuthorUsername, Time } from './HeaderStyles';
import { TTheme } from '../../../../styles/themes/types';

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
        <BaseIconButton
          icon={{
            name: 'three-dots',
            color: (theme: TTheme) => theme.colors.text.secondary,
            size: 18,
          }}
        />
      </Right>
    </Container>
  );
};

export default BaseTweetInlineHeader;
