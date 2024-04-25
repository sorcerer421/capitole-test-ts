
import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../Loading';

test('renders the header component', () => {
  const  screen = render(<Loading />);
  // Add your assertions here
  expect(screen.queryByTestId('loading-component')).toBeInTheDocument();
});
