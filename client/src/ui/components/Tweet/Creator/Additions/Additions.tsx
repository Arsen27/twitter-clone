import { Container } from './AdditionsStyles';
import Item from './Item';

export enum Additions {
  Media = 'media',
  Gif = 'gif',
  Poll = 'poll',
  Emoji = 'emoji',
  Schedule = 'schedule',
  Location = 'location',
}

type TAddition = {
  title: string;
  icon: string;
}

const fullList = [
  Additions.Media,
  Additions.Gif,
  Additions.Poll,
  Additions.Emoji,
  Additions.Schedule,
  Additions.Location,
];

type TAdditionsProps = {
  list?: Additions[];
}

type TAdditionsMap = Record<Additions, TAddition>;

const additionsMap: TAdditionsMap = {
  [Additions.Media]: { title: 'Media', icon: 'image' },
  [Additions.Gif]: { title: 'GIF', icon: 'filetype-gif' },
  [Additions.Poll]: { title: 'Poll', icon: 'pie-chart' },
  [Additions.Emoji]: { title: 'Emoji', icon: 'emoji-smile' },
  [Additions.Schedule]: { title: 'Schedule', icon: 'calendar4-event' },
  [Additions.Location]: { title: 'Location', icon: 'geo-alt' },
};

function getFilteredAdditions(list: Additions[], additionsMap: TAdditionsMap): TAddition[] {
  const filteredEntries = Object.entries(additionsMap).filter(([key]) =>
    list.includes(key as Additions)
  );

  return Object.values(Object.fromEntries(filteredEntries));
}

const TweetCreatorAdditions = ({ list = fullList, ...other }: TAdditionsProps) => {
  const filteredAdditions = getFilteredAdditions(list, additionsMap);

  return (
    <Container { ...other }>
      { filteredAdditions.map((addition: TAddition) => (
        <Item icon={addition.icon} />
      )) }
    </Container>
  );
};

export default TweetCreatorAdditions;
