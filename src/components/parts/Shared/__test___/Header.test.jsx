
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('renders the header component', () => {
  const screen = render(<Header />);
  expect(screen.getByText('Podcaster')).toBeInTheDocument();
});

test('renders the header component', () => {
  const screen = render(<Header />);
  expect(screen.queryByText('Not title')).toBeFalsy();
});


test('check loading', () => {
  const screen = render(<Header loading/>);
  // Add your assertions here
  expect(screen.getByText('Podcaster')).toBeInTheDocument();
  expect(screen.getByTestId('loading-component')).toBeInTheDocument();
});

test('check loading', () => {
  const screen = render(<Header loading={false}/>);
  // Add your assertions here
  expect(screen.getByText('Podcaster')).toBeInTheDocument();
  expect(screen.queryByTestId('loading-component')).toBeFalsy();
});