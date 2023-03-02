import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button', () => {
  const buttonTestID = 'button';

  describe('Rendering', () => {
    beforeEach(() => {
      render(
        <Button data-testid={buttonTestID} variant="primary">
          Click
        </Button>
      );
    });

    it('Should be able to render button', () => {
      expect(screen.getByTestId(buttonTestID)).toBeInTheDocument();
    });

    it('Should be able to render button with text', () => {
      expect(screen.getByText('Click')).toHaveTextContent('Click');
    });
  });

  describe('Styles', () => {
    it('Should be able to render button with primary variant', () => {
      const tree = renderer
        .create(<Button variant="primary">Click</Button>)
        .toJSON();
      expect(tree).toHaveStyleRule('background-color', '#0070f3');
    });

    it('Should be able to render button with secondary variant', () => {
      // const { getByTestId } = render(
      //   <Button data-testid={buttonTestID} variant="secondary">
      //     Click
      //   </Button>
      // );
      // expect(getByTestId(buttonTestID)).toHaveStyle(
      //   'background-color: #5c2d91'
      // );
      const tree = renderer
        .create(<Button variant="secondary">Click</Button>)
        .toJSON();
      expect(tree).toHaveStyleRule('background-color', '#5c2d91');
    });
  });

  describe('Event', () => {
    it('Should be able to fire event', () => {
      const onClick = vi.fn();
      const { getByTestId } = render(
        <Button data-testid={buttonTestID} onClick={onClick}>
          Click
        </Button>
      );
      fireEvent.click(getByTestId(buttonTestID));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});

// Em geral, ambas as abordagens são úteis e complementares para testar componentes React, e a escolha da abordagem depende do objetivo do teste e do tipo de componente sendo testado. Testes que envolvem interações do usuário são mais adequados para a abordagem com @testing-library/react, enquanto testes que envolvem a verificação de estados e propriedades do componente podem ser mais adequados para a abordagem com react-test-renderer.
