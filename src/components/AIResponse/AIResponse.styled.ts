import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledAIResponse = styled.div`
  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.subtitle};
    text-align: center;
    margin: 0 auto;
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    font-size: ${theme.font.sizes.paragraph};
  }
`;

export const StyledAIResponseContainer = styled.div`
  background-color: ${theme.colors.black};
  padding: ${theme.spacing.lg} ${theme.spacing.sm} ${theme.spacing.lg}
    ${theme.spacing.lg};
  width: 100%;
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.gray.dark};
  display: ${theme.flex.display.flex};
  align-items: ${theme.flex.align.center};
  justify-content: ${theme.flex.justify.center};
  display: ${theme.flex.display.flex};
  flex-direction: ${theme.flex.dir.col};

  p {
    font-style: italic;
  }

  p::first-letter {
    font-size: ${theme.font.sizes.title};
  }

  p + p {
    margin-top: ${theme.spacing.sm};
    text-align: left;
    width: 100%;
  }
`;
