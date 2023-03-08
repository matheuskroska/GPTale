import {
  StyledAIResponse,
  StyledAIResponseContainer,
} from './AIResponse.styled';

export interface AIResponseProps {
  children?: React.ReactNode;
  title?: string;
}

export const AIResponse = ({ children, title, ...props }: AIResponseProps) => {
  return (
    <StyledAIResponse>
      <h2>{title}</h2>
      <StyledAIResponseContainer>{children}</StyledAIResponseContainer>
    </StyledAIResponse>
  );
};
