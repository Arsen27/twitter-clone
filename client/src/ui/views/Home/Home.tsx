import BaseDivider from '../../components/Base/Divider/Divider';
import BaseTweetInline from '../../components/Tweet/Inline';
import LayoutsMain from '../../layouts/Main/Main';
import TweetCreator from '../../components/views/Home/TweetCreator';

type THomeProps = {
}

const ViewsHome = ({}: THomeProps) => {
  return (
    <LayoutsMain header={{ $content: 'Home' }}>
      <TweetCreator />

      <BaseTweetInline />
      <BaseDivider spacing={4} />
    </LayoutsMain>
  );
};

export default ViewsHome;
