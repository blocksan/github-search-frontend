import React from 'react';
import { render } from '@testing-library/react';
import {UserCardComponent} from './UserCardComponent';

test('renders learn react link', () => {
  const { getByText } = render(<UserCardComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
