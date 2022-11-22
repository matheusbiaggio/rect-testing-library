import React from 'react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 2 - Teste o componente <About.js />', () => {
  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    // Acessar
    const { getByRole } = renderWithRouter(<About />);
    const titleEl = getByRole('heading', {
      name: /about pokédex/i,
    });
    // Agir

    // Aferir
    expect(titleEl).toBeInTheDocument();
  });
  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    // Acessar
    const { getByText } = renderWithRouter(<About />);
    const p1El = getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    const p2El = getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    // Agir

    // Aferir
    expect(p1El).toBeInTheDocument();
    expect(p2El).toBeInTheDocument();
  });
  test('Testa se a página contém uma imagem de uma Pokédex', () => {
    // Acessar
    const { getByRole } = renderWithRouter(<About />);
    const imageSrcEl = getByRole('img', {
      src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    });
    const imageNameEl = getByRole('img', {
      name: /pokédex/i,
    });
    // Agir

    // Aferir
    expect(imageSrcEl).toBeInTheDocument();
    expect(imageSrcEl.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(imageNameEl).toBeInTheDocument();
  });
});
