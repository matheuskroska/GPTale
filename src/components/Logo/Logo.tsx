import { StyledLogo } from './Logo.styled';

export interface LogoProps {
  children?: React.ReactNode;
}

export const Logo = ({ children, ...props }: LogoProps) => {
  return (
    <StyledLogo data-testid="logo" {...props}>
      {children}
    </StyledLogo>
  );
};
