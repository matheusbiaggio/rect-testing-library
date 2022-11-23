import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import App from '../App';
// import data from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 7 - Teste o componente <PokemonDetails.js />', () => {
  const pikachuPage = '/pokemon/25';
  describe('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    test('Testa se a página contem um texto <name> Details, onde <name> é o nome do Pokémon', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const nameDetailsEl = getByRole('heading', {
        name: /pikachu details/i,
      });
      // Agir

      // Aferir
      expect(nameDetailsEl).toBeInTheDocument();
    });
    test('Testa se a seção de detalhes contem um heading h2 com o texto Summary', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const summaryEl = getByRole('heading', {
        name: /summary/i,
      });
      // Agir

      // Aferir
      expect(summaryEl).toBeInTheDocument();
    });
    test('Testa se contem um parágrafo com o resumo do Pokémon específico sendo visualizado', () => {
      // Acessar
      const { history, getByText } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const pEl = getByText(/this intelligent pokémon roasts/i);
      // Agir

      // Aferir
      expect(pEl).toBeInTheDocument();
    });
  });
  describe('Testa se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    test('Testa se existe um heading h2 com o texto Game Locations of <name>', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const gameLocationEl = getByRole('heading', {
        name: /game locations of pikachu/i,
      });
      // Agir

      // Aferir
      expect(gameLocationEl).toBeInTheDocument();
    });
    test('Testa se todas as localizações do Pokémin estão sendo mostradas', () => {
      // Acessar
      const { history, getAllByRole } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const AllGameLocationEl = getAllByRole('img');
      // Agir

      // Aferir
      expect(AllGameLocationEl[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
      expect(AllGameLocationEl[1]).toHaveAttribute('alt', 'Pikachu location');
      expect(AllGameLocationEl[2]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
      expect(AllGameLocationEl[2]).toHaveAttribute('alt', 'Pikachu location');
    });
    test('Testa se os nomes de todas as localizações do Pokémon estão sendo mostradas', () => {
      // Acessar
      const { history, getByText } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const nameFirstLocationEL = getByText(/kanto viridian forest/i);
      const nameSecondLocationEl = getByText(/kanto power plant/i);
      // Agir

      // Aferir
      expect(nameFirstLocationEL).toBeInTheDocument();
      expect(nameSecondLocationEl).toBeInTheDocument();
    });
  });
  describe('Testa se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    test('Testa se a página tem um checkbox que permite favoritar o Pokémon', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const checkboxEl = getByRole('checkbox', {
        name: /pokémon favoritado\?/i,
      });
      // Agir

      // Aferir
      expect(checkboxEl).toBeInTheDocument();
    });
    test('Testa se clicks alternados adicionam ou removem dos favoritos', () => {
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push(pikachuPage);
      });
      const checkboxEl = getByRole('checkbox', {
        name: /pokémon favoritado\?/i,
      });
      userEvent.click(checkboxEl);
      expect(checkboxEl).toBeChecked();
      userEvent.click(checkboxEl);
      expect(checkboxEl).not.toBeChecked();
    });
  });
});
