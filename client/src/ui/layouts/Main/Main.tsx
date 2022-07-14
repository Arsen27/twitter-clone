import { TChildren } from '../../../types';
import { Container, Left, Content, Right } from './MainStyles';
import RightSidebar from '../../components/layouts/Main/RightSidebar';
import LeftSidebar from '../../components/layouts/Main/LeftSidebar';

type TMainProps = {
  children: TChildren;
}

const LayoutsMain = ({ children }: TMainProps) => {
  return (
    <Container>
      <Left>
        <LeftSidebar />
      </Left>

      <Content>{ children }</Content>

      <Right>
        <RightSidebar/>
      </Right>
    </Container>
  );
};

export default LayoutsMain;
