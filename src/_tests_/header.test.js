import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/header';

afterEach(cleanup);

it('renders ok', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});

it('check for h1 text', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('header-h1')).toHaveTextContent('Superheroes and Villains');
});

it('check for p text', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('header-p')).toHaveTextContent('search in the catalogue');
});
