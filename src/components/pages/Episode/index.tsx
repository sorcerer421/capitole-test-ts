'use client';

import { usePodcastById } from '@/query/podcast';

const Episode = ({podcastId, episodeId}: { podcastId: string, episodeId: string }) => {
  const podcastQuery = usePodcastById(podcastId);
  //console.log('::podcast::',podcastQuery.data);

  return (
    <div>
      <p>Episode Detail</p>

      {/* {usersQuery.data?.map((user) => (
        <p key={user.email}>{user.name}</p>
      ))} */}
    </div>
  );
};

export default Episode;
