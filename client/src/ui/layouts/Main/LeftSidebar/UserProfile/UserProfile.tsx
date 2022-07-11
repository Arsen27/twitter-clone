import BaseAvatar from '../../../../components/Base/Avatar/Avatar';
import BaseIcon from '../../../../components/Base/Icon/Icon';
import { Container, Details, Name, UserName, Options } from './UserProfileStyles';

type TUserProfileProps = {
}

const LayoutsMainLeftSidebarUserProfile = ({}: TUserProfileProps) => {
  return (
    <Container>
      <BaseAvatar size={40} />

      <Details>
        <Name>Arsen</Name>
        <UserName>@Arsen72</UserName>
      </Details>

      <Options
        as={BaseIcon}
        name='three-dots'
      />
    </Container>
  );
};

export default LayoutsMainLeftSidebarUserProfile;
