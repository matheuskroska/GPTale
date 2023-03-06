import { StyledBodyWrapper } from './BodyWrapper.styled';

export interface BodyWrapperProps {
  children?: React.ReactNode;
}

export const BodyWrapper = ({ children, ...props }: BodyWrapperProps) => {
  return <StyledBodyWrapper {...props}>{children}</StyledBodyWrapper>;
};
