import { useEffect, useRef } from 'react';
import { StyledLabel, StyledTextArea, StyledWrapper } from './TextArea.styled';

export interface TextAreaProps {
  label?: string;
  name: string;
  value: string;
  children?: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  children,
  ...props
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '24px';
      textareaRef.current.style.overflowY =
        textareaRef.current?.scrollHeight >= 200 ? 'auto' : 'hidden';
      textareaRef.current.style.maxHeight = '200px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <StyledWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledTextArea
        id={name}
        name={name}
        value={value}
        ref={textareaRef}
        placeholder="Type your prompt here..."
        onChange={onChange}
        {...props}
      />
      {children}
    </StyledWrapper>
  );
};
