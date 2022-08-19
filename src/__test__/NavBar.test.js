import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '@testing-library/jest-dom';

it('matches snapshot', () => {
  const tree = render(<Router><NavBar /></Router>);
  expect(tree).toMatchSnapshot();
});
