import { useQuery } from '@tanstack/react-query';

import { getPodcastDetail, getPodcastList } from '@/repositories/podcast';

export const getPodcastListKey = () => ['podcasts'];
export const getPodcastDetailKey = (id: string) => ['podcast', id];

export const usePodcast = () => {
  const result = useQuery({
    queryKey: getPodcastListKey(),
    queryFn: getPodcastList
  });

  return result;
};

export const usePodcastById = (id: string) => {
  const result = useQuery({
    queryKey: getPodcastDetailKey(id),
    queryFn: getPodcastList
  });

  return result;
}
