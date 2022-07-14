import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { withTheme } from 'styled-components';

import BaseAvatar from '../../../Base/Avatar/Avatar';
import BaseButton, { ButtonVariants } from '../../../Base/Button';
import BaseDivider from '../../../Base/Divider/Divider';
import BaseIcon from '../../../Base/Icon';
import { TTheme } from '../../../../styles/themes/types';
import { Container, Left, Right, Textarea, CanReplyButton, Bottom, Additions, Addition, TweetButton } from './TweetCreatorStyles';

type TTweetCreatorProps = {
  theme: TTheme;
}

type TAdition = {
  name: string;
  icon: string;
  disabled?: boolean;
}

const additions = [
  { name: 'Media', icon: 'image' },
  { name: 'GIF', icon: 'filetype-gif' },
  { name: 'Poll', icon: 'pie-chart' },
  { name: 'Emoji', icon: 'emoji-smile' },
  { name: 'Schedule', icon: 'calendar4-event' },
  { name: 'Location', icon: 'geo-alt' },
];

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
          <Additions>
            { additions.map((addition: TAdition, i: number) => (
              <Addition
                key={i}
                as={BaseButton}
                variant={ButtonVariants.Free}
              >
                <BaseIcon
                  name={addition.icon}
                  size={17}
                />
              </Addition>
            )) }
          </Additions>

          <TweetButton
            as={BaseButton}
          >
            Tweet
          </TweetButton>
        </Bottom>
      </Right>
    </Container>
  );
};

export default withTheme(ViewsHomeTweetCreator);