import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 6 - Teste o componente <Pokemon.js />', () => {
  describe('Testa se é renderizado um card com as informações de determinado Pokémon', () => {
    test('Testa se o nome correto do Pokémon é mostrado na tela', () => {
      // Acessar
      const { getByText } = renderWithRouter(<App />);
      const nameEl = getByText(/pikachu/i);
      // Agir

      // Aferir
      expect(nameEl).toBeInTheDocument();
    });
    test('Testa se o tipo correto do Pokémon é mostrado na tela', () => {
      // Acessar
      const { getAllByText } = renderWithRouter(<App />);
      const typeEL = getAllByText(/electric/i);
      // Agir

      // Aferir
      expect(typeEL[0]).toBeInTheDocument();
    });
    test('Testa se o peso médio do POkémin é exibido na tela no formato Average weight: <value> <measurementUnit>', () => {
      // Acessar
      const { getByText } = renderWithRouter(<App />);
      const measureEl = getByText(/average weight: 6\.0 kg/i);
      // Agir

      // Aferir
      expect(measureEl).toBeInTheDocument();
    });
    test('Testa se a imagem do Pokémon é exibida com o atributo src e alt.', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const nameImgEl = getByRole('img', {
        name: /pikachu sprite/i,
      });
      const srcImgEl = getByRole('img', {
        src: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      });
      // Agir

      // Aferir
      expect(nameImgEl).toBeInTheDocument();
      expect(srcImgEl).toBeInTheDocument();
    });
  });
  test('Testa se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon', () => {
    const { getByRole, history } = renderWithRouter(<App />);
    const moreDetailsEl = getByRole('link', {
      name: /more details/i,
    });
    expect(moreDetailsEl).toBeInTheDocument();
    userEvent.click(moreDetailsEl);
    expect(history.location.pathname).toBe('/pokemon/25');
  });
  describe('Testa se existe um ícone de estrela nos Pokémon favoritados', () => {
    test('Testa se o ícone é uma imagem com atributo src contendo o caminho /star-icon,svg', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const starSrcEl = getByRole('img', {
        src: '/star-icon.svg',
      });
      // Agir

      // Aferir
      expect(starSrcEl).toBeInTheDocument();
    });
    test('Testa se a imagem tem o atributo alt igual a <Pokemon> is marked as favorite, onde <Pokemon> é o nome do Pokémon exibido', () => {
      // Acessar
      const { getByRole } = renderWithRouter(<App />);
      const starAltEl = getByRole('img', {
        alt: /pikachu is marked as favorite/i,
      });
      // Agir

      // Aferir
      expect(starAltEl).toBeInTheDocument();
    });
  });
});
