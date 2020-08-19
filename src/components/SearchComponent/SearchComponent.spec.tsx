import React from 'react';
import { render } from '@testing-library/react';
import {SearchComponent} from './SearchComponent';

test('renders learn react link', () => {
  const { getByText } = render(<SearchComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
