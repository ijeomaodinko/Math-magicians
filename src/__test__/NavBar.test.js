import React from 'react';
import { ReactDOM } from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';
import '@testing-library/jest-dom';
import { BrowserRouter as Router} from 'react-router-dom'


it('matches snapshot', () => {
    const tree = render(<Router><NavBar /></Router>,);
    expect(tree).toMatchSnapshot();
});