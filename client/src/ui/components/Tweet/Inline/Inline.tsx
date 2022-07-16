import Header from './Header';
import Footer from './Footer';
import BaseAvatar from '../../Base/Avatar';
import { Container, Left, Right, Content, Text } from './InlineStyles';
import PhotoBox from '../../Base/Tweet/PhotoBox';

type TTweetProps = {
}

const TweetInline = ({}: TTweetProps) => (
  <Container>
    <Left>
      <BaseAvatar size={48} />
    </Left>

    <Right>
      <Header />
      
      <Content>
        <Text>Tesla’s automatic cabin overheat protection should make a real difference with record heatwaves.<br /><br />Ability to adjust activation temperature coming with next software release.</Text>

        <PhotoBox></PhotoBox>
      </Content>

      <Footer />
    </Right>
  </Container>
);

export default TweetInline;
