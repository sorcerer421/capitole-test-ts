
import React from 'react';
import { getPodcastDetailKey } from '@/query/podcast';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/queryClient';
import { getPodcastDetail } from '@/repositories/podcast';
import Podcast from '@/components/pages/Podcast';

const PodcastComponent = async ({params}:{
  params: { slug: string };
}) => {
  const { slug } = params || {};

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: getPodcastDetailKey(slug),
    queryFn: () => getPodcastDetail(slug)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Podcast podcastId={slug}/>
    </HydrationBoundary>
  );
};

export default PodcastComponent;
