import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { StyledButton } from '../Button/Button.styled';

export const StyledTextArea = styled.textarea`
  font-size: ${theme.font.sizes.textArea};
  font-family: ${theme.font.family};
  color: ${theme.colors.gray.light};
  resize: none;
  width: 100%;
  background-color: transparent;
  border: 0;
  padding: 0 3.7rem 0 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.gray.medium};
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.gray.light};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray.medium};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.gray.dark};
  }
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
  position: relative;
  background-color: ${theme.colors.black};
  padding: ${theme.spacing.lg} ${theme.spacing.sm} ${theme.spacing.lg}
    ${theme.spacing.lg};
  width: 100%;
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.gray.dark};
  display: ${theme.flex.display.flex};
  align-items: ${theme.flex.align.center};
  justify-content: ${theme.flex.justify.center};

  ${StyledButton} {
    position: absolute;
    bottom: 3.5rem;
    right: 2rem;
  }
`;
