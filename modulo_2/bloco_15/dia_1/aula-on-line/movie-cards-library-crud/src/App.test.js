import React from 'react';
import { render, fireEvent, screen, waitForElementToBeRemoved, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Movie List', () => {
  test("Renderiza 'Carregando...' quando inicia a aplicação", () => {
    const { getByText } = render(<App />);

    expect(getByText('Carregando...')).toBeDefined();
  });

  test('Exibe o primeiro filme', async () => {
    render(<App />);

    await waitForElementToBeRemoved( 
      () => screen.getByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(screen.getByText('Kingsglaive')).toBeDefined();
  });

  test('Renderiza a página de detalhes ao clicar em "Ver Detalhes"', async () => {
    render(<App />);

    await waitForElementToBeRemoved( 
      () => screen.getByText('Carregando...'),
      { timeout: 3000 },
    );
    
    const buttonDetails = screen.getByTestId('KingsglaiveDetails');
    fireEvent.click(buttonDetails);

    await waitForElementToBeRemoved( 
      () => screen.getByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(screen.getByText(/genre/i)).not.toBeNull();
    expect(screen.getByText(/rating/i)).not.toBeNull();
  });
});
