import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { withTheme } from 'styled-components';

import BaseAvatar from '../../../Base/Avatar/Avatar';
import BaseButton, { ButtonVariants } from '../../../Base/Button';
import BaseDivider from '../../../Base/Divider/Divider';
import BaseIcon from '../../../Base/Icon';
import { TTheme } from '../../../../styles/themes/types';
import { Container, Left, Right, Textarea, CanReplyButton, Bottom, Addition, TweetButton } from './TweetCreatorStyles';
import SubmitButton from '../../../Tweet/Creator/SubmitButton';
import Additions from '../../../Tweet/Creator/Additions';

type TTweetCreatorProps = {
  theme: TTheme;
}

const ViewsHomeTweetCreator = ({ theme }: TTweetCreatorProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Left>
        <BaseAvatar size={48} />
      </Left>

      <Right>
        <Textarea
          as={TextareaAutosize}
          onFocus={() => setIsFocused(true)}
          placeholder={`What's happening?`}
        />
        
        <CanReplyButton
          as={BaseButton}
          variant={ButtonVariants.Free}
          isFocused={isFocused}
        >
          <BaseIcon
            name='globe'
            color={theme.colors.accent}
            size={14}
          />
          
          <span>Everyone can reply</span>
        </CanReplyButton>

        <BaseDivider
          show={isFocused}
          spacing={12}
        />

        <Bottom>
          <Additions />

          <SubmitButton>Tweet</SubmitButton>
        </Bottom>
      </Right>
    </Container>
  );
};

export default withTheme(ViewsHomeTweetCreator);
