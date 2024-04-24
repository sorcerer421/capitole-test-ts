'use client';

import Header from '@/components/parts/Shared/Header';
import PodcastDetailCard from '@/components/parts/Shared/PodcastDetailCard';
import { usePodcast, usePodcastById } from '@/query/podcast';
import { useRouter } from 'next/navigation';

const Episode = ({podcastId, episodeId}: { podcastId: string, episodeId: string }) => {

  const router = useRouter();
  const handleBack = () => {
    router.back()
  }

  const podcastInfoQuery = usePodcast();
  const podcastQuery = usePodcastById(podcastId);
  const {results} = podcastQuery.data || {};
  if (results && results.length > 0) {
    const feed = podcastInfoQuery.data?.feed;
    const entry = feed?.entry;
    const listPodcastInfo = entry?.find((podcast) => podcast.id.attributes['im:id'] === podcastId) || {summary: {label: ''}};
    const episodeInfo = results.find((episode) => episode.trackId === Number(episodeId));
    const podcastInfo = results[0];
    console.log('::episodeInfo::',episodeInfo?.description);
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
          <div className="episode-card">
            <h2 className="text-xl font-bold">{episodeInfo?.trackName}</h2>
            <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: episodeInfo?.description ?? '' }}></p>
            <audio controls className="mt-4">
              <source src={episodeInfo?.episodeUrl} type="audio/mpeg" />
            </audio>
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
      <h1 className="text-2xl font-bold">Episode not found</h1>
      </div>
    </>
    )
  }

  export default Episode;
