import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  StyledError,
  StyledLabel,
  StyledTextArea,
  StyledWrapper,
} from './TextArea.styled';

export interface TextAreaProps {
  label?: string;
  name: string;
  value: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  onKeyDown,
  ...props
}: TextAreaProps) => {
  const [textareaHeight, setTextareaHeight] = useState<string>('24px');
  const [overflow, setOverflow] = useState<string>('hidden');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef.current?.scrollHeight}px`);
    setOverflow(textareaHeight === '24px' ? 'hidden' : 'auto');
  }, [value]);

  return (
    <StyledWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledTextArea
        id={name}
        name={name}
        value={value}
        ref={textareaRef}
        onChange={onChange}
        style={{
          height: textareaHeight,
          maxHeight: '200px',
          overflowY: overflow as any,
        }}
        {...props}
      />
    </StyledWrapper>
  );
};
