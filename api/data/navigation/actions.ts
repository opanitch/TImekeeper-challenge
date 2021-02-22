import { createAction } from '@reduxjs/toolkit';

import { convertPathToArray } from './helpers';

// App rendered and tied `window.location` to componentDidMount()
export const pageLoad = createAction(
  'PAGE_LOAD',
  ({
    hash,
    queryParams,
    path,
    route,
  }: {
    hash?: string;
    queryParams?: Record<string, string>;
    path?: string;
    route?: string[];
  }) => {
    const currentTime = Date.now();
    // Converts string paths to an array, defaulting to [] is neither route nor path are present
    const routeArray = path ? convertPathToArray(path) : route || [];

    return {
      payload: {
        currentTime: currentTime,
        hash: hash ? hash : null,
        queryParams: queryParams,
        route: routeArray,
      },
    };
  }
);

export const setRoute = createAction(
  'SET_ROUTE',
  ({ hash, route }: { hash: string | null; route: string[] }) => ({
    payload: {
      hash,
      route,
    },
  })
);

export const setQueryParams = createAction(
  'SET_QUERY_PARAMS',
  (queryParams: Record<string, string | number>) => ({
    payload: { queryParams },
  })
);
