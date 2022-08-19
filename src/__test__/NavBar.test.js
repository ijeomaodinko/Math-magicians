import React from 'react';
import { ReactDOM } from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

it('matches snapshot', () => {
    const tree = renderer.create(<NavBar></NavBar>).toJSON();
    expect(tree).toMatchSnapshot()
});