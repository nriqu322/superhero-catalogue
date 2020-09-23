import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PublisherFilter from '../components/publisherFilter';

afterEach(cleanup);

it('publisher renders ok', () => {
  const { asFragment } = render(<PublisherFilter publisherList={['Marvel Comics', 'DC Comics']} filterPublisher={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// it();
