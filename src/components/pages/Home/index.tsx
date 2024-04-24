'use client';

import Header from '@/components/parts/Shared/Header';
import PodcastCard from '@/components/parts/Shared/PodcastCard';
import { usePodcast } from '@/query/podcast';
import { Podcast, ReceivedPodcast } from '@/repositories/podcast/types';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const podcastQuery = usePodcast();
  const feed = podcastQuery.data?.feed;
  const entry = feed?.entry;
  console.log('::entry::',entry);
  let actualList: Podcast[] = [];
  entry?.map((podcast: ReceivedPodcast) => {
    actualList.push({
      id: podcast.id.attributes['im:id'],
      title: podcast['im:name'].label,
      imageUrl: podcast['im:image'][2].label,
      author: podcast['im:artist'].label
  })
  });

  const handleClick = (id: string) => {
    router.push(`/podcast/${id}`);
  }

  return (
    <>
      <Header loading={podcastQuery.isFetching}/>
      <div className='pl-48 bg-gray-200'>
        <div className='flex flex-wrap'>
        {actualList?.map((podcast) => <PodcastCard key={podcast.id} {...podcast} handleClick={handleClick}/>)}
        </div>
      </div>
    </>
  );
};

export default Home;
