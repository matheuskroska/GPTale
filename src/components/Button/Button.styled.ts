import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { ButtonProps } from './Button';
import { BUTTON_VARIANTS } from './Button';

const primaryStyles = css<ButtonProps>`
  color: ${theme.colors.white};
  background-color: transparent;
  border: 1px solid ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
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

const iconStyles = css<ButtonProps>`
  background-color: transparent;
  color: ${theme.colors.white};
  padding: 0;
  height: 0;

  &:hover {
    color: ${theme.colors.gray.dark};
  }
`;

const baseStyles = css<ButtonProps>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.font.sizes.paragraph};
  border: none;
  height: ${theme.spacing.xxl};
  cursor: pointer;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${baseStyles};

  ${(props) => props.variant === BUTTON_VARIANTS.PRIMARY && primaryStyles};
  ${(props) => props.variant === BUTTON_VARIANTS.SECONDARY && secondaryStyles};
  ${(props) => props.variant === BUTTON_VARIANTS.ICON && iconStyles};
`;
