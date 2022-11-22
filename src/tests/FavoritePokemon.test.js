import React from 'react';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';

const data = require('../mock/mockData');

jest.mock('../mock/mockData');

describe('Requisito 3 - Teste o componente <FavoritePokemon.js />', () => {
  test(`Testa se é exibida na tela a mensagem "No favorite pokemon found",
  caso a pessoa não tenha Pokémon favoritos`, () => {
    global.fetch = () => {};
    // Acessar
    const { getByText } = renderWithRouter(<FavoritePokemon />);
    const notFoundEl = getByText(/no favorite pokémon found/i);
    // Agir

    // Aferir
    expect(notFoundEl).toBeInTheDocument();
  });
  test('Testa se são exibidos todos os cards de Pokémon favoritados', () => {
    // mocando as informações
    // Acessar
    // Agir

    // Aferir
    console.log(data);
    expect(data.data.name).toBe('Pikachu');
  });
});
