import { cache } from 'react';

import { QueryClient } from '@tanstack/react-query';

const STALE_TIME = 1000 * 60 * 5; // 5 minutes
const CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME
    },
    mutations: {
      onError: (error: Error) => {
        /** You can use toast or notification here */
        console.error(error.message);
      }
    }
  }
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
