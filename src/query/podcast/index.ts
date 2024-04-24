import { useQuery } from '@tanstack/react-query';

import { getPodcastDetail, getPodcastList } from '@/repositories/podcast';
import { QueryFunction } from '@tanstack/react-query';

export const getPodcastListKey = () => ['podcasts'];
export const getPodcastDetailKey = () => ['podcastInfo'];

export const usePodcast = () => {
  const result = useQuery({
    queryKey: getPodcastListKey(),
    queryFn: getPodcastList
  });

  return result;
};

export const usePodcastById = (id: string) => {
  const result = useQuery({
    queryKey: getPodcastDetailKey(),
    queryFn: () => getPodcastDetail(id)
  });

  return result;
}
