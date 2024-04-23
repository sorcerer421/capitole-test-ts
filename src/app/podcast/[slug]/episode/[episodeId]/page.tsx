
import React, { use } from 'react';
import { useRouter } from 'next/router'
import { getPodcastDetailKey, usePodcastById } from '@/query/podcast';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/queryClient';
import { getPodcastDetail } from '@/repositories/podcast';
import { useParams } from 'next/navigation';
import Episode from '@/components/pages/Epidode';


const EpisodeComponent = async () => {
  const slug = 1;
  
  
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: getPodcastDetailKey(slug?.toString() || ''),
    queryFn: () => getPodcastDetail()
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <div>
        Podcast {slug}
      </div> */}
      <Episode/>
    </HydrationBoundary>
  );
};

export default EpisodeComponent;
