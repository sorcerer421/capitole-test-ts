'use client';

import { usePodcastById } from '@/query/podcast';

const Podcast = ({ podcastId }: { podcastId: string }) => {
  const podcastQuery = usePodcastById(podcastId);
  console.log('::podcast::',podcastQuery.data);

  return (
    <div>
      <p>Podcast Info and episodes</p>
    </div>
  );
};

export default Podcast;
