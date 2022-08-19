import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/home';

test('Display text on the screen', () => {
  render(<Home />);
  const element = screen.getByText(/Welcome!, to our page/i);
  expect(element).toBeInTheDocument();
});
