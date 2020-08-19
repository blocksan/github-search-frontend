import React from 'react';
import { render } from '@testing-library/react';
import {HeaderWrapperComponent} from './HeaderWrapperComponent';

test('renders learn react link', () => {
  const { getByText } = render(<HeaderWrapperComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
