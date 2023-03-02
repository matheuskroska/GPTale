import { StyledButton } from './Button.styled';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export interface ButtonProps {
  variant?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      data-testid="button"
      onClick={onClick}
      variant={variant}
      type="button"
    >
      {children}
    </StyledButton>
  );
};
