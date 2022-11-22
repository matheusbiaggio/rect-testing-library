import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 1 - Teste o componente <App.js />', () => {
  describe('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    test('Verifica se o primeiro link possui o texto Home', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const linkHomeEl = getByRole('link', {
        name: /home/i,
      });
      // Agir

      // Aferir
      expect(linkHomeEl).toBeInTheDocument();
    });
    test('Verifica se o primeiro link possui o texto About', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const linkAboutEl = getByRole('link', {
        name: /About/i,
      });
      // Agir

      // Aferir
      expect(linkAboutEl).toBeInTheDocument();
    });
    test('Verifica se o primeiro link possui o texto Favorite Pokémon', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const linkFavoritePokemonEl = getByRole('link', {
        name: /Favorite Pokémon/i,
      });
      // Agir

      // Aferir
      expect(linkFavoritePokemonEl).toBeInTheDocument();
    });
  });
  describe('Testa se muda de rota ao clicar nos links', () => {
    test('Verifica se é redirecionado para a pagina inicial ao clicar no Home', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      const linkHomeEl = getByRole('link', {
        name: /home/i,
      });
      // Agir
      userEvent.click(linkHomeEl);
      // Aferir
      expect(history.location.pathname).toBe('/');
    });
    test('Verifica se é redirecionado para a URL /about ao clicar no About', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      const linkAboutEl = getByRole('link', {
        name: /About/i,
      });
      // Agir
      userEvent.click(linkAboutEl);
      // Aferir
      expect(history.location.pathname).toBe('/about');
    });
    test('Verifica se é redirecionado para a URL /favorites ao clicar no Favorite Pokémon', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      const linkFavoritePokemonEl = getByRole('link', {
        name: /Favorite Pokémon/i,
      });
      // Agir
      userEvent.click(linkFavoritePokemonEl);
      // Aferir
      expect(history.location.pathname).toBe('/favorites');
    });
    test('Verifica se é redirecionado para a pagina Not Found ao entrar em uma URL desconhecida', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push('/matheus');
      });
      const linkNotFound = getByRole('heading', {
        name: /page requested not found/i,
      });
      // Agir

      // Aferir
      expect(linkNotFound).toBeInTheDocument();
    });
  });
});
