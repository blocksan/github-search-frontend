import React from 'react';
import { render } from '@testing-library/react';
import {ContentWrapper} from './ContentWrapper';

test('renders learn react link', () => {
  const { getByText } = render(<ContentWrapper />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
