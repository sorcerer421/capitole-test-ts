'use client';

import Header from '@/components/parts/Shared/Header';
import PodcastCard from '@/components/parts/Shared/PodcastCard';
import { usePodcast } from '@/query/podcast';
import { Podcast, ReceivedPodcast } from '@/repositories/podcast/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Home = () => {
  const router = useRouter();
  const podcastQuery = usePodcast();
  const feed: { entry?: ReceivedPodcast[] } = podcastQuery?.data?.feed || {};
  const entry = feed?.entry;
  let actualList: Podcast[] = [];
  entry?.map((podcast: ReceivedPodcast) => {
    actualList.push({
      id: podcast.id.attributes['im:id'],
      title: podcast['im:name'].label,
      imageUrl: podcast['im:image'][2].label,
      author: podcast['im:artist'].label
  })
  });
  const [filteredList, setFilteredList] = useState<Podcast[]>(actualList);

  const handleClick = (id: string) => {
    router.push(`/podcast/${id}`);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const copyActualList = actualList.filter((podcast: { title: string | string[]; }) => podcast.title.includes(value));
    setFilteredList(copyActualList);
  }

  return (
    <>
      <Header loading={podcastQuery.isFetching}/>
      <div className='flex justify-end w-full bg-gray-100 p-4'>
        <div className='w-64'>
          <input type="text" placeholder="Search" onChange={(event)=> handleSearch(event)}/>
        </div>  
      </div>
      <div className='pl-48 bg-gray-100'>
        <div className='flex flex-wrap'>
        {filteredList?.map((podcast) => <PodcastCard key={podcast.id} {...podcast} handleClick={handleClick}/>)}
        </div>
      </div>
    </>
  );
};

export default Home;