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
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  ...props
}: TextAreaProps) => {
  const [textareaHeight, setTextareaHeight] = useState<string>('auto');

  useEffect(() => {
    setTextareaHeight(`${document.getElementById(name)?.scrollHeight}px`);
  }, [value, name]);

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaHeight('auto');
    onChange(event);
  };

  return (
    <StyledWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledTextArea
        id={name}
        name={name}
        value={value}
        onChange={handleTextAreaChange}
        style={{ height: textareaHeight }}
        {...props}
      />
    </StyledWrapper>
  );
};
