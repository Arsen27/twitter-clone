import { Link } from 'react-router-dom';

import { TChildrenProp } from '../../../../types';
import { StyledLink } from './LinkStyles';

type TLinkProps = {
  to: string;
}

const BaseLink = ({ children, to, ...other }: TLinkProps & TChildrenProp) => {
  return (
    <StyledLink
      to={to}
      as={Link}
      { ...other }
    >
      { children }
    </StyledLink>
  );
};

export default BaseLink;
