import React from 'react';
import { useRouter } from 'next/router'


const EpisodeComponent   = () => {
  const router = useRouter()
  
  return (
    <div>
      Podcast {router.query.slug} Episode {router.query.episodeId}
    </div>
  );
};

export default EpisodeComponent  ;