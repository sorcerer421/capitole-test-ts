'use client';

import Header from '@/components/parts/Shared/Header';
import PodcastDetailCard from '@/components/parts/Shared/PodcastDetailCard';
import { usePodcast, usePodcastById } from '@/query/podcast';
import { PodcastEpisode } from '@/repositories/podcast/types';
import { useRouter } from 'next/navigation';

const Podcast = ({ podcastId }: { podcastId: string }) => {
  const router = useRouter();
  const podcastInfoQuery = usePodcast();
  const podcastQuery = usePodcastById(podcastId);

  const handleDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
  }

  const handleDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  }

  const handleClick = (episode: PodcastEpisode) => {
    router.push(`/podcast/${podcastId}/episode/${episode.trackId}`);
  }

  const handleBack = () => {
    router.back()
  }

  const {results} = podcastQuery.data || {};
  if (results && results.length > 0) {
    const feed = podcastInfoQuery.data?.feed;
    const entry = feed?.entry;
    const listPodcastInfo = entry?.find((podcast) => podcast.id.attributes['im:id'] === podcastId) || {summary: {label: ''}};
    
    const podcastInfo = results[0];
    const podcastEpisodesList = [...results];
    podcastEpisodesList.shift();
    
    return (
      <>
        <Header loading={podcastQuery.isFetching}/>
        <div className='flex flex-row'>
          <PodcastDetailCard 
            title={podcastInfo?.collectionName}
            imageUrl={podcastInfo?.artworkUrl600} 
            author={podcastInfo?.artistName} 
            description={listPodcastInfo?.summary.label}
            onClick={handleBack}
          />
          <div>
            <h1>Episodes: {podcastInfo.trackCount}</h1>
            <div className='flex flex-wrap'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='bg-gray-200'>Title</th>
                    <th className='bg-gray-200'>Date</th>
                    <th className='bg-gray-200'>Duration</th>
                  </tr>
                 
                </thead>
                <tbody>
                  {podcastEpisodesList.map((episode, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} onClick={()=> handleClick(episode)}>
                      <td>{episode.trackName}</td>
                      <td>{handleDate(episode.releaseDate)}</td>
                      <td>{handleDuration(episode.trackTimeMillis)} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  } 
  return(
    <>
      <Header loading={podcastQuery.isFetching}/>
      <div>
        <h1>Podcast not found</h1>
      </div>
    </>
  )
};

export default Podcast;
