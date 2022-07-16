import UserProfile from './UserProfile';
import BaseButtonsIcon from '../../../Base/buttons/Icon';
import { Container, Header, Content, Text } from './ContentStyles';
import { TTheme } from '../../../../styles/themes/types';
import PhotoBox from '../../../Base/Tweet/PhotoBox';
import Footer from './Footer';

type TTweetProps = {
}

const ViewsThreadTweet = ({}: TTweetProps) => {
  return (
    <Container>
      <Header>
        <UserProfile />
        
        <BaseButtonsIcon
          icon={{
            name: 'three-dots',
            color: (theme: TTheme) => theme.colors.text.secondary,
            size: 18,
          }}
        />
      </Header>

      <Content>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        
        <PhotoBox />
      </Content>

      <Footer />
    </Container>
  );
};

export default ViewsThreadTweet;
