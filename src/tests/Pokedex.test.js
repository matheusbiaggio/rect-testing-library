import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 5 - Teste o componente <Pokedex.js />', () => {
  describe('Testa se... ', () => {
    test('A página contém um heading h2 com o texto Encountered Pokémon', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const titleEl = getByRole('heading', {
        name: /pokédex/i,
      });
      // Agir

      // Aferir
      expect(titleEl).toBeInTheDocument();
    });
  });
  describe('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    test('Testa se o botão tem o texto Próximo Pokémon', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const buttonEl = getByRole('button', {
        name: /próximo pokémon/i,
      });
      // Agir

      // Aferir
      expect(buttonEl).toBeInTheDocument();
    });
    test('Testa se os próximos Pokémon são mostrados ao clicar no botão', () => {
      // Acessar
      const { getByRole, getByText } = renderWithRouter(<App />);
      const buttonEl = getByRole('button', {
        name: /próximo pokémon/i,
      });
      // Agir
      userEvent.click(buttonEl);
      const nameEl = getByText(/Charmander/i);
      // Aferir
      expect(nameEl).toHaveTextContent('Charmander');
    });
    test('Testa se é mostrado o primeiro Pokémon da lista depois do último Pokémon da lista', () => {
      // Acessar
      const { getByRole, getByText } = renderWithRouter(<App />);
      const buttonEl = getByRole('button', {
        name: /próximo pokémon/i,
      });
      const nameEl = getByText(/pikachu/i);
      // Agir
      for (let i = 0; i < 9; i += 1) {
        userEvent.click(buttonEl);
      }
      // Aferir
      expect(nameEl).toHaveTextContent('Pikachu');
    });
  });
  describe('Teste se a Pokédex tem os botões de filtro', () => {
    test('Testa se existe um botão de filtragem para cada tipo de Pokémon, sem repetição', () => {
      // Acessar
      const { getAllByTestId } = renderWithRouter(<App />);
      const buttonEl = getAllByTestId('pokemon-type-button');
      // Agir

      // Aferir
      expect(buttonEl[0]).toHaveTextContent('Electric');
      expect(buttonEl[1]).toHaveTextContent('Fire');
      expect(buttonEl[2]).toHaveTextContent('Bug');
      expect(buttonEl[3]).toHaveTextContent('Poison');
      expect(buttonEl[4]).toHaveTextContent('Psychic');
      expect(buttonEl[5]).toHaveTextContent('Normal');
      expect(buttonEl[6]).toHaveTextContent('Dragon');
    });
    test('Testa se o botão All esta sempre visível', () => {
      // Acessar
      const { getByRole, getAllByTestId } = renderWithRouter(<App />);
      const buttonEl = getAllByTestId('pokemon-type-button');
      const buttonAllEl = getByRole('button', {
        name: /all/i,
      });
      expect(buttonAllEl).toBeEnabled();
      userEvent.click(buttonEl[0]);
      expect(buttonAllEl).toBeEnabled();
      userEvent.click(buttonEl[1]);
      expect(buttonAllEl).toBeEnabled();
      userEvent.click(buttonEl[2]);
      expect(buttonAllEl).toBeEnabled();
      userEvent.click(buttonEl[3]);
      expect(buttonAllEl).toBeEnabled();
      userEvent.click(buttonEl[4]);
      expect(buttonAllEl).toBeEnabled();
      userEvent.click(buttonEl[5]);
      expect(buttonAllEl).toBeEnabled();
      userEvent.click(buttonEl[6]);
      expect(buttonAllEl).toBeEnabled();
    });
  });
  describe('Testa se a POkédex contém um botão para resetar o filtro', () => {
    test('Testa se o texto do botão é All', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const buttonAllEl = getByRole('button', {
        name: /all/i,
      });
      // Agir

      // Aferir
      expect(buttonAllEl).toHaveTextContent('All');
    });
    test('Testa se a Pokédex mostra todos os Pokémon normalmente quando o botão All é clicado', () => {
      // Acessar
      const { getByRole, getByText } = renderWithRouter(<App />);
      const buttonAllEl = getByRole('button', {
        name: /all/i,
      });
      const buttonNextEl = getByRole('button', {
        name: /próximo pokémon/i,
      });
      userEvent.click(buttonAllEl);
      const nameEl = getByText(/pikachu/i);
      expect(nameEl).toHaveTextContent('Pikachu');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Charmander');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Caterpie');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Ekans');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Alakazam');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Mew');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Rapidash');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Snorlax');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Dragonair');
      userEvent.click(buttonNextEl);
      expect(nameEl).toHaveTextContent('Pikachu');
    });
  });
});
