import React from 'react';
import { useRouter } from 'next/router'


const PodcastComponent  = () => {
  const router = useRouter()
  return (
    <div>
      Podcast {router.query.slug}
    </div>
  );
};

export default PodcastComponent ;