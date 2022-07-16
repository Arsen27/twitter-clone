import Content from '../../components/views/Tweet/Content';
import LayoutsMain from '../../layouts/Main/Main';
import BaseButtonsIcon from '../../components/Base/buttons/Icon';
import BaseDivider from '../../components/Base/Divider';
import { TTheme } from '../../styles/themes/types';
import ReplyCreator from '../../components/views/Tweet/ReplyCreator';
import TweetInline from '../../components/Tweet/Inline/Inline';

type TThreadProps = {
}

const ViewsTweet = ({}: TThreadProps) => {
  return (
    <LayoutsMain header={{
      $content: 'Tweet',
      $icon: (
        <BaseButtonsIcon icon={{
          name: 'arrow-left',
          color: (theme: TTheme) => theme.colors.text.primary,
          colorHover: (theme: TTheme) => theme.colors.bg.highlight,
        }} />
      )
    }}>
      <Content />
      
      <ReplyCreator />
      <BaseDivider />

      <TweetInline />
    </LayoutsMain>
  );
};

export default ViewsTweet;
