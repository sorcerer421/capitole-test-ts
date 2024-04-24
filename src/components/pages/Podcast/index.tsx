'use client';

import Header from '@/components/parts/Shared/Header';
import { usePodcastById } from '@/query/podcast';

const Podcast = ({ podcastId }: { podcastId: string }) => {
  const podcastQuery = usePodcastById(podcastId);
  console.log('::podcast::',podcastQuery.data);

  return (
    <>
      <Header loading={podcastQuery.isFetching}/>
      <div>
        <p>Podcast Info and episodes</p>
      </div>
    </>
  );
};

export default Podcast;
