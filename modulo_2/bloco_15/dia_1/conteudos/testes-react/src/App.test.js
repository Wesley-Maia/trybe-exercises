import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('Verifica que há um campor de input de email na tela', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email')
    expect(inputEmail).toBeInTheDocument();
  });
  
  it('Verifica que há dois botões', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button')
    expect(button.length).toBe(2);
  });
  
  it('Verifica que há botão \'Enviar\'', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId ('id-send')
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });

  it('Verifica que, ao inserir o email e clicar em "Enviar", o e-mail aparece na tela', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText ('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');

    fireEvent.change(emailInput, { target: { value: 'wesley@conta.com' } });
    fireEvent.click(sendButton);

    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: wesley@conta.com');
    
  });
})
