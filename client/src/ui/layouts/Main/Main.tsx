import { TChildren } from '../../../types';
import { Container, Left, Content, Right } from './MainStyles';
import RightSidebar from '../../components/layouts/Main/RightSidebar';
import LeftSidebar from '../../components/layouts/Main/LeftSidebar';
import Header, { THeaderProps } from '../../components/layouts/Main/Header';

type TMainProps = {
  header: THeaderProps & { $content: TChildren };
  children: TChildren;
}

const LayoutsMain = ({ children, header }: TMainProps) => {
  return (
    <Container>
      <Left>
        <LeftSidebar />
      </Left>

      <Content>
        <Header $icon={header.$icon}>{ header.$content }</Header>
        { children}
      </Content>

      <Right>
        <RightSidebar/>
      </Right>
    </Container>
  );
};

export default LayoutsMain;
