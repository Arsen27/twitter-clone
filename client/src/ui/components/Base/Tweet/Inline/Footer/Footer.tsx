import { TTheme } from '../../../../../styles/themes/types';
import BaseIconButton from '../../../buttons/IconButton';
import { Container } from './FooterStyles';

type TFooterProps = {
}

const BaseTweetInlineFooter = ({}: TFooterProps) => {
  const defaultColor = (theme: TTheme) => theme.colors.text.secondary;

  return (
    <Container>
      <BaseIconButton
        number={200}
        icon={{
          name: 'chat',
          size: 16,
          color: defaultColor,
          colorHover: (theme: TTheme) => theme.colors.accent,
        }}
      />

      <BaseIconButton
        number={57}
        icon={{
          name: 'arrow-repeat',
          size: 17,
          color: defaultColor,
          colorHover: (theme: TTheme) => theme.colors.green,
        }}
      />

      <BaseIconButton
        number={57}
        icon={{
          name: 'heart',
          size: 16,
          color: defaultColor,
          colorHover: (theme: TTheme) => theme.colors.pink,
        }}
      />

      <BaseIconButton
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
