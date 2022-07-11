import BaseButton from '../../../components/Base/Button/Button';
import BaseLogo from '../../../components/Base/Logo/Logo';
import BaseMenu from '../../../components/Base/Menu/Menu';
import { Container, Top, Content, TweetButton, Bottom } from './LeftSidebarStyles';
import UserProfile from './UserProfile';

type TLeftSidebarProps = {
}

const LayoutsMainLeftSidebar = ({}: TLeftSidebarProps) => {
  return (
    <Container>
      <Top>
        <BaseLogo />
      </Top>

      <Content>
        <BaseMenu />
        <TweetButton as={BaseButton}>Tweet</TweetButton>
      </Content>

      <Bottom>
        <UserProfile />
      </Bottom>
    </Container>
  );
};

export default LayoutsMainLeftSidebar;

