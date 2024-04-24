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


export interface PodcastEpisode {

}