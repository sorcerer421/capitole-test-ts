
import React from 'react';
import { getPodcastDetailKey } from '@/query/podcast';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/queryClient';
import { getPodcastDetail } from '@/repositories/podcast';
import Episode from '@/components/pages/Episode';


const EpisodeComponent = async ({params}:{
  params: { slug: string, episodeId: string};
}) => {
  const {slug, episodeId} = params || {};
  
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: getPodcastDetailKey(slug),
    queryFn: () => getPodcastDetail(slug)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Episode podcastId={slug} episodeId={episodeId}/>
    </HydrationBoundary>
  );
};

export default EpisodeComponent;
