import { Container } from './MenuStyles';
import itemsList from './itemsList';
import { TMenuItem } from './types';
import Item from './Item';

type TMenuProps = {
}

const LayoutsMainLeftSidebarMenu = ({}: TMenuProps) => {
  const $items = itemsList.map((item: TMenuItem) => <Item { ...item } />);

  return (
    <Container>
      { $items }
    </Container>
  );
};

export default LayoutsMainLeftSidebarMenu;
