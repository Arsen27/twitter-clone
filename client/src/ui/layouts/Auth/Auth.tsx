import { TChildrenProp } from '../../../types';
import { Container } from './AuthStyles';

type TAuthProps = {
}

const LayoutsAuth = ({ children }: TAuthProps & TChildrenProp) => {
  return (
    <Container>
      { children }
    </Container>
  );
};

export default LayoutsAuth;
