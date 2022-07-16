import { TChildrenProp } from '../../../../../types';
import { Title } from './TitleStyles';

type TTitleProps = {
}

const LayoutsAuthTitle = ({ children }: TTitleProps & TChildrenProp) => {
  return (
    <Title>
      { children }
    </Title>
  );
};

export default LayoutsAuthTitle;
