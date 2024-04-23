import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import Home from '@/components/pages/Home';
import generateMetadata from '@/lib/metadata';
import { getQueryClient } from '@/lib/queryClient';
import { getPodcastList } from '@/repositories/podcast';
import { getPodcastListKey } from '@/query/podcast';

export const metadata = generateMetadata({ title: 'Home' }, { withSuffix: true });

const HomePage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: getPodcastListKey(),
    queryFn: getPodcastList
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
};

export default HomePage;
