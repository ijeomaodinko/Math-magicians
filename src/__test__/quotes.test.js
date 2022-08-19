import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from '../pages/quotes';

test('Display text on the screen', () => {
  render(<Quotes />);
  const element = screen.getByText(/Welcome to our page!/i);
  expect(element).toBeInTheDocument();
});
