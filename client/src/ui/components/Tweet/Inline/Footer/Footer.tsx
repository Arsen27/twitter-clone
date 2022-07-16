import { TTheme } from '../../../../styles/themes/types';
import BaseButtonsIcon from '../../../Base/buttons/Icon';
import { Container } from './FooterStyles';

type TFooterProps = {
}

const BaseTweetInlineFooter = ({}: TFooterProps) => {
  const defaultColor = (theme: TTheme) => theme.colors.text.secondary;

  return (
    <Container>
      <BaseButtonsIcon
        number={200}
        icon={{
          name: 'chat',
          size: 16,
          color: defaultColor,
          colorHover: (theme: TTheme) => theme.colors.accent,
        }}
      />

      <BaseButtonsIcon
        number={57}
        icon={{
          name: 'arrow-repeat',
          size: 17,
          color: defaultColor,
          colorHover: (theme: TTheme) => theme.colors.green,
        }}
      />

      <BaseButtonsIcon
        number={57}
        icon={{
          name: 'heart',
          size: 16,
          color: defaultColor,
          colorHover: (theme: TTheme) => theme.colors.pink,
        }}
      />

      <BaseButtonsIcon
        icon={{
          name: 'share',
          size: 16,
          color: defaultColor,
          colorHover: (theme: TTheme) => theme.colors.accent,
        }}
      />
    </Container>
  );
};

export default BaseTweetInlineFooter;
