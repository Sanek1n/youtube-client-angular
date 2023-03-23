interface IThumbnails {
  default: {
    url: string,
    width: number,
    height: number
  },
  medium: {
    url: string,
    width: number,
    height: number
  },
  high: {
    url: string,
    width: number,
    height: number
  },
  standard: {
    url: string,
    width: number,
    height: number
  },
  maxres: {
    url: string,
    width: number,
    height: number
  }
}

interface ISnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: Array<string>,
  categoryId: string,
  liveBroadcastContent: string,
  localized: {
    title: string,
    description: string
  },
  defaultAudioLanguage: string
}

interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics
}

export default ISearchItem;
