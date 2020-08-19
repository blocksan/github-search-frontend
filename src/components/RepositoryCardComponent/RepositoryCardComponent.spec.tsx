import React from 'react';
import { render } from '@testing-library/react';
import {RepositoryCardComponent} from './RepositoryCardComponent';

test('renders learn react link', () => {
  const { getByText } = render(<RepositoryCardComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
