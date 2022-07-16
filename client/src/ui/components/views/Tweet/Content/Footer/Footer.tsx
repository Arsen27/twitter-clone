import { Container, Row, Time, Date, Count, CountNumber, CountTitle, ActionsRow } from './FooterStyles';
import BaseDivider, { DividerOrientations, DividerTypes } from '../../../../Base/Divider';
import BaseButtonsIcon from '../../../../Base/buttons/Icon';
import { TTheme } from '../../../../../styles/themes/types';

type TFooterProps = {
}

const ViewsThreadTweetFooter = ({}: TFooterProps) => {
  const defaultColor = (theme: TTheme) => theme.colors.text.secondary;

  return (
    <Container>
      <Row>
        <Time>12:03 PM</Time>

        <BaseDivider
          type={DividerTypes.Dot}
          orientation={DividerOrientations.Vertical}
          spacing={6}
          size={2}
          color={(theme: TTheme) => theme.colors.text.secondary}
        />

        <Date>Jul 15, 2022</Date>
      </Row>

      <BaseDivider />

      <Row>
        <Count>
          <CountNumber>157</CountNumber>
          <CountTitle>Retweets</CountTitle>
        </Count>

        <Count>
          <CountNumber>21</CountNumber>
          <CountTitle>Quote Tweets</CountTitle>
        </Count>

        <Count>
          <CountNumber>2,754</CountNumber>
          <CountTitle>Likes</CountTitle>
        </Count>
      </Row>

      <BaseDivider />

      <Row as={ActionsRow}>
        <BaseButtonsIcon
          size={40}
          icon={{
            name: 'chat',
            size: 20,
            color: defaultColor,
            colorHover: (theme: TTheme) => theme.colors.accent,
          }}
        />

        <BaseButtonsIcon
          size={40}
          icon={{
            name: 'arrow-repeat',
            size: 21,
            color: defaultColor,
            colorHover: (theme: TTheme) => theme.colors.green,
          }}
        />

        <BaseButtonsIcon
          size={40}
          icon={{
            name: 'heart',
            size: 20,
            color: defaultColor,
            colorHover: (theme: TTheme) => theme.colors.pink,
          }}
        />

        <BaseButtonsIcon
          size={40}
          icon={{
            name: 'share',
            size: 20,
            color: defaultColor,
            colorHover: (theme: TTheme) => theme.colors.accent,
          }}
        />
      </Row>

      <BaseDivider />
    </Container>
  );
};

export default ViewsThreadTweetFooter;
