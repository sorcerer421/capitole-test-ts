'use client';

import { usePodcast } from '@/query/podcast';

const Home = () => {
  const podcastQuery = usePodcast();
  console.log(podcastQuery.data);

  return (
    <div>
      <p>Podcast list</p>

      {/* {usersQuery.data?.map((user) => (
        <p key={user.email}>{user.name}</p>
      ))} */}
    </div>
  );
};

export default Home;
