'use client';

import { usePodcastById } from '@/query/podcast';

const Podcast = ({ podcastId }: { podcastId: string }) => {
  const podcastQuery = usePodcastById(podcastId);
  //console.log('::podcast::',podcastQuery.data);

  return (
    <div>
      <p>Podcast Info and episodes</p>

      {/* {usersQuery.data?.map((user) => (
        <p key={user.email}>{user.name}</p>
      ))} */}
    </div>
  );
};

export default Podcast;
