import React from 'react';
import { render } from '@testing-library/react';
import {HeaderComponent} from './HeaderComponent';

test('renders learn react link', () => {
  const { getByText } = render(<HeaderComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
