import { useRef, useState } from 'react';

import useClickOutside from '../../../hooks/useClickOutside';
import { Container, Label, Input } from './InputStyles';

type TInputProps = {
  value: string;
  label: string;
  onChange: (newValue: string) => void;
}

const BaseInput = ({ label, value, onChange }: TInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const $containerRef = useClickOutside(() => value || blur());
  const $inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    setIsFocused(true);
    $inputRef && $inputRef.current!.focus();
  };

  const blur = () => {
    setIsFocused(false);
    $inputRef && $inputRef.current!.blur();
  };

  const isActive = !!value;

  return (
    <Container
      isActive={isActive}
      ref={$containerRef}
      onClick={focus}
    >
      <Label isFocused={isFocused}>{ label }</Label>

      <Input
        ref={$inputRef}
        isFocused={isFocused}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default BaseInput;
