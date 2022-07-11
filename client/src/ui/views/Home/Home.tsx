import LayoutsMain from '../../layouts/Main/Main';
import { Header } from './HomeStyles';
import TweetCreator from './TweetCreator';

type THomeProps = {
}

const ViewsHome = ({}: THomeProps) => {
  return (
    <LayoutsMain>
      <Header>Home</Header>

      <TweetCreator />
    </LayoutsMain>
  );
};

export default ViewsHome;
