import BaseDivider from '../../components/Base/Divider/Divider';
import BaseTweetInline from '../../components/Base/Tweet/Inline';
import LayoutsMain from '../../layouts/Main/Main';
import { Header } from './HomeStyles';
import TweetCreator from '../../components/views/Home/TweetCreator';

type THomeProps = {
}

const ViewsHome = ({}: THomeProps) => {
  return (
    <LayoutsMain>
      <Header>Home</Header>

      <TweetCreator />

      <BaseTweetInline></BaseTweetInline>
      <BaseDivider spacing={4} />
    </LayoutsMain>
  );
};

export default ViewsHome;
