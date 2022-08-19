import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

test('Display text on the screen', () => {
  render(<Calculator />);
  const element = screen.getByText(/Let's do some Math/i);
  expect(element).toBeInTheDocument();
});

it('matches snapshot', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
