import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const StyledTextArea = styled.textarea`
  font-size: ${theme.font.sizes.textArea};
  font-family: ${theme.font.family};
  color: ${theme.colors.gray.light};
  resize: none;
  width: 100%;
  max-width: 48rem;
  background-color: transparent;
  height: auto;
  max-height: 20rem;
  border: 0;
  overflow-y: hidden;
`;

export const StyledLabel = styled.label`
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.xs};
`;

export const StyledError = styled.span`
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weights.bold};
  color: ${theme.colors.secondary};
  margin-top: ${theme.spacing.xs};
`;

export const StyledWrapper = styled.div`
  padding: ${theme.spacing.lg};
  width: fit-content;
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.gray.dark};
`;
