import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledLogo = styled.h1`
  font-family: 'Aladin', cursive;
  margin: 0 auto;
  text-align: center;
  font-size: 20rem;
  position: relative;
  svg {
    width: 100%;
    filter: invert(1);
    border-radius: ${theme.borderRadius.xl};
    position: absolute;
    left: -150px;
    top: 0px;
  }
`;
