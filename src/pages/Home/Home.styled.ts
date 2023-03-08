import styled from 'styled-components';
import theme from '../../styles/theme';
import { StyledWrapper } from '@/components/TextArea/TextArea.styled';
import { StyledAIResponse } from '@/components/AIResponse/AIResponse.styled';

console.log(StyledWrapper);
console.log(StyledAIResponse);

export const StyledHome = styled.div`
  ${StyledWrapper} + ${StyledAIResponse} {
    margin-top: ${theme.spacing.lg};
  }
`;
