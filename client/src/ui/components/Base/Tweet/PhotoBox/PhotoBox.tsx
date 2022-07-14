import { Container, RightColumn, Image, LeftColumn } from './PhotoBoxStyles';

type TPhotoBoxProps = {
}

const images = [
  'https://images.unsplash.com/photo-1565098235617-1d429c400daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  'https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
];

const BaseTweetPhotoBox = ({}: TPhotoBoxProps) => {
  const count = images.length;

  const $renderImages = (array: string[]) => array.map((image: string) => (
    <Image
      link={image}
    />
  ));

  const $leftColumnItems = $renderImages(images.filter((_, i) => i%2 === 1));
  const $rightColumnItems = $renderImages(images.filter((_, i) => i%2 === 0));

  return (
    <Container>
      { !!$leftColumnItems.length && (
        <LeftColumn>
          { $leftColumnItems }
        </LeftColumn>
      ) }

       <RightColumn>
        { $rightColumnItems }
      </RightColumn>
    </Container>
  );
};

export default BaseTweetPhotoBox;
