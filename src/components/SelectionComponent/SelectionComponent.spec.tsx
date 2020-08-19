import React from 'react';
import { render } from '@testing-library/react';
import {SelectionComponent} from './SelectionComponent';

test('renders learn react link', () => {
  const { getByText } = render(<SelectionComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
