import React from 'react';
import { act } from 'react-dom/test-utils';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 4 - Teste o componente <NotFound.js />', () => {
  test('Testa se a página contém um heading h2 com o texto Page requested not found', () => {
    // Acessar
    const { history, getByRole } = renderWithRouter(<NotFound />);
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
  test('Testa se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    // Acessar
    const { getByRole } = renderWithRouter(<NotFound />);
    const imageSrcEl = getByRole('img', {
      src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    });
    const imageNameEl = getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    // Agir

    // Aferir
    expect(imageSrcEl).toBeInTheDocument();
    expect(imageSrcEl.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(imageNameEl).toBeInTheDocument();
  });
});
