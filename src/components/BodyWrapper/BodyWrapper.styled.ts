import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledBodyWrapper = styled.div`
  max-width: ${theme.breakpoints.md};
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
    padding: 0 ${theme.spacing.xl};
  }
`;
