import { title } from "process";

export interface Podcast {
  id: string;
  title: string;
  imageUrl: string;
  author: string;
}

export interface ReceivedFeed {
  feed: PodcastList;
}

export interface PodcastList {
  entry: ReceivedPodcast[];
}

export interface ReceivedPodcast {
  id: {attributes: {'im:id': string};};
  'im:image': {label:string}[];
  'im:name': {label: string};
  title: {label: string};
  summary: {label: string};
  'im:artist': {label: string};
}


export interface ReceivedTrackDetails {
  resultCount: number;
  results: PodcastEpisode[];
}

export interface PodcastEpisode {
  releaseDate: string;
  trackTimeMillis: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  trackCount: number;
  artworkUrl600: string;
  description: string;
  trackId: number;
  episodeUrl: string;
}