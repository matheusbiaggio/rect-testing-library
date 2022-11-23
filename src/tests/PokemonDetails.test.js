import React from 'react';
import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import data from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 7 - Teste o componente <PokemonDetails.js />', () => {
  describe('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    test('Testa se a página contem um texto <name> Details, onde <name> é o nome do Pokémon', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push('/pokemon/25');
      });
      const nameDetailsEl = getByRole('heading', {
        name: /pikachu details/i,
      });
      // Agir

      // Aferir
      expect(nameDetailsEl).toBeInTheDocument();
    });
    test('', () => {
      // Acessar
      const { history, getByRole } = renderWithRouter(<App />);
      act(() => {
        history.push('/pokemon/25');
      });
      const summaryEl = getByRole('heading', {
        name: /summary/i,
      });
      // Agir

      // Aferir
      expect(summaryEl).toBeInTheDocument();
    });
    // test('', () => {

    // });
  });
});
