

import React from 'react';
import { render } from '@testing-library/react';
import PodcastCard from '../PodcastCard';

test('renders the Podcastcard component', () => {
  const screen = render(<PodcastCard 
      title='Test title' 
      imageUrl='https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg' 
      author='Alfonso' />);
  // Add your assertions here
  expect(screen.getByText('Test title')).toBeInTheDocument();
  expect(screen.getByText('Author: Alfonso')).toBeInTheDocument();
});
