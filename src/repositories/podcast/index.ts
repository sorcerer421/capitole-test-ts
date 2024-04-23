import { Podcast, PodcastEpisode } from "./types";

export const getPodcastList = async () => {
  const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then((res) => res.json() as Promise<Podcast[]>);
  return response;
};


export const getPodcastDetail = async () => { 
  const id = 934552872
  const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)
    .then((res) => res.json() as Promise<PodcastEpisode[]>);
  return response;
};