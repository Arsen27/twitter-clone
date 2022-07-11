import { Link } from 'react-router-dom';

import BaseIcon, { IconTypes } from '../../Icon';
import { TMenuItem } from '../types';
import { Wrapper ,Container, Text } from './ItemStyles';

type TItemProps = {
} & TMenuItem;

const BaseMenuItem = ({ text, icon, path }: TItemProps) => {
  return (
    <Wrapper
      to={`/${path}`}
      as={Link}
    >
      <Container>
        <BaseIcon
          name={icon.name}
          color='white'
          size={24}
          source={icon.source}
          type={IconTypes.Outlined}
        />

        <Text>{ text }</Text>
      </Container>
    </Wrapper>
  );
};

export default BaseMenuItem;

