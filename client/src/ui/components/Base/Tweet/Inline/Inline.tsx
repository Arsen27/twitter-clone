import Header from './Header';
import Footer from './Footer';
import BaseAvatar from '../../Avatar';
import { Container, Left, Right, Content, Text } from './InlineStyles';
import PhotoBox from '../PhotoBox';

type TTweetProps = {
}

const BaseTweetInline = ({}: TTweetProps) => (
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

export default BaseTweetInline;
