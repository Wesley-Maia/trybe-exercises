import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';
import Header from '../components/Header';
import renderWithRouter from './renderWithRouter';

describe('App.js tests', () => {
  test('Renderiza as páginas "sobre mim" e "projetos" ', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const aboutText = screen.getByRole('heading', {
      name: /página sobre mim/i,
      level: 1,
    });
    expect(aboutText).toBeInTheDocument();

    const projectLink = screen.getByRole('link', {
      name: /projetos/i,
    });
    userEvent.click(projectLink);

    const projectText = screen.getByRole('heading', {
      name: /página de projetos/i,
      level: 1,
    });
    expect(projectText).toBeInTheDocument();
  });

  test('Renderizando o Header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });
});

describe('App.js Página não encontrada', () => {
  test('Renderiza mensagem de "Página não encontrada"', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    history.push('/rota-que-nao-existe');

    const notFoundText = getByRole('heading', {
      name: /página não encontrada/i,
      level: 1,
    });
    expect(notFoundText).toBeInTheDocument();
  });

  test('Entra na página de comentários /comments e deixa um comentário', () => {
    const { getByRole, getByText, history } = renderWithRouter(<App />);

    history.push('/comments');

    const commentText = getByRole('heading', {
      name: /comente!/i,
      level: 1,
    });
    expect(commentText).toBeInTheDocument();

    const inputText = getByRole('textbox');
    userEvent.type(inputText, 'alguma coisa');

    const addButton = getByRole('button', {
      name: /add comment/i,
    });
    userEvent.click(addButton);

    const listItem = getByText(/alguma coisa/i);
    expect(listItem).toBeInTheDocument();
  });
});
