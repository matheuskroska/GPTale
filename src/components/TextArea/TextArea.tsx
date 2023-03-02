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
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
  [key: string]: any;
}

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  ...props
}: TextAreaProps) => {
  return (
    <StyledWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledTextArea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {touched && error && <StyledError>{error}</StyledError>}
    </StyledWrapper>
  );
};
