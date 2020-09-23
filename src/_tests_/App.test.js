import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

afterEach(cleanup);

it('renders app', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
