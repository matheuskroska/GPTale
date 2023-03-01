import styled, { css } from 'styled-components';
import theme from '../styles/theme';
import { ButtonProps } from './Button';
import { BUTTON_VARIANTS } from './Button';

const primaryStyles = css<ButtonProps>`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  &:active {
    background-color: ${theme.colors.black};
  }
`;

const secondaryStyles = css<ButtonProps>`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.black};
  }
`;

const baseStyles = css<ButtonProps>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.xl};
  border: none;
  cursor: pointer;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${baseStyles};

  ${(props) => props.variant === BUTTON_VARIANTS.PRIMARY && primaryStyles};
  ${(props) => props.variant === BUTTON_VARIANTS.SECONDARY && secondaryStyles};
`;
