import BaseAvatar from '../../../../Base/Avatar/Avatar';
import { Container, Left, Right, Name, Username } from './UserProfileStyles';

type TUserProfileProps = {
}

const ViewsThreadTweetUserProfile = ({}: TUserProfileProps) => {
  return (
    <Container>
      <Left>
        <BaseAvatar size={48} /> 
      </Left>

      <Right>
        <Name>Elon Musk</Name>
        <Username>@elonmusk</Username>
      </Right>
    </Container>
  );
};

export default ViewsThreadTweetUserProfile;
