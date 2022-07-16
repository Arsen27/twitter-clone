import { useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';
import BaseAvatar from '../../../Base/Avatar/Avatar';
import CreatorAdditions, { Additions } from '../../../Tweet/Creator/Additions';
import SubmitButton from '../../../Tweet/Creator/SubmitButton';

import { Container, Profile, Textarea, ReplyButton, StyledAdditions, ReplyingTo, ReplyingToUsername } from './ReplyCreatorStyles';

type TReplyCreatorProps = {
}

const ViewsTweetReplyCreator = ({}: TReplyCreatorProps) => {
  const [wasFocused, setWasFocused] = useState(false);

  return (
    <Container>
      <ReplyingTo>Replying to <ReplyingToUsername>@elonmusk</ReplyingToUsername></ReplyingTo>

      <Profile>
        <BaseAvatar size={48} />
      </Profile>
      
      <Textarea
        as={TextareaAutosize}
        onFocus={() => setWasFocused(true)}
        placeholder='Tweet your reply'
        wasFocused={wasFocused}
      />

      { wasFocused && <StyledAdditions
        as={CreatorAdditions}
        list={[Additions.Media, Additions.Gif, Additions.Emoji, Additions.Location]} 
      /> }

      <ReplyButton
        as={SubmitButton}
        wasFocused={wasFocused}
      >
        Reply
      </ReplyButton>
    </Container>
  );
};

export default ViewsTweetReplyCreator;
