import isEqual from 'lodash.isequal';
import { Epic } from 'redux-observable';
import {
  distinctUntilKeyChanged,
  filter,
  ignoreElements,
  mergeMap,
  skip,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

import { Action, StoreShape } from 'API/data/types';

import { setTimekeeper } from '../timekeeper/actions';
import { CUSTOM, DEFAULT, DEFAULT_VALUE } from '../timekeeper/constants';
import { convertMinutesToMilliseconds } from '../timekeeper/helpers';

import { pageLoad, setQueryParams, setRoute } from './actions';
import { convertParamsToString } from './helpers';
import { TimekeeperState } from '../timekeeper/types';

// Epic triggered on first App Render and when `window.location` is updated
export const pageLoaded: Epic<Action, Action, StoreShape> = (action$, state$) =>
  action$.pipe(
    filter(pageLoad.match),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { queryParams, route } = state.navigation;
      const { payload } = action;
      const actions = [];

      const _stateDuration = queryParams.duration;
      const _queryDuration =
        payload.queryParams && parseInt(payload.queryParams.duration);
      const _queryCurrentTime = payload.currentTime;

      // Create new Timekeeper values to send to TimekeeperState and queryString
      /**
       * `duration`: Order of Importance:
       * * `duration` queryString prop
       * * `navigation.queryParams.duration` State value
       * * DEFAULT_VALUE stored in CONSTANTS
       */
      const newDuration =
        _queryDuration ||
        (typeof _stateDuration === 'string'
          ? parseInt(_stateDuration)
          : _stateDuration) ||
        DEFAULT_VALUE;
      // `durationType`: If `duration` was assigned from queryString, make it CUSTOM
      const newDurationType =
        _queryDuration !== _stateDuration ? CUSTOM : DEFAULT;
      // `startTime`
      const newStartTime =
        _queryCurrentTime - convertMinutesToMilliseconds(newDuration);

      // Construct new queryParams Object and maintain current params
      const newQueryParams = {
        ...queryParams,
        ...payload.queryParams,
        duration: newDuration,
        endTime: _queryCurrentTime,
        startTime: newStartTime,
      };
      // Construct new Timekeeper Object
      const newTimekeeper: TimekeeperState = {
        duration: newDuration,
        durationType: newDurationType,
        endTime: _queryCurrentTime,
        startTime: newStartTime,
      };

      // If the payload is showing a new route, update `navigation.route` State value
      if (!isEqual(payload.route, route)) {
        actions.push(
          setRoute({
            hash: payload.hash,
            route: payload.route,
          })
        );
      }
      console.log('NAVIGATION SET');
      console.log(newQueryParams);
      actions.push(setQueryParams(newQueryParams));
      actions.push(setTimekeeper(newTimekeeper));

      return [...actions];
    })
  );

// Watches State for changes in `navigation.queryParams` to update queryString in URL bar
export const setQueryString: Epic<Action, Action, StoreShape> = (
  action$,
  state$,
  { window }
) => {
  const setQueries = (state: StoreShape) => {
    const newParams = `?${convertParamsToString(state.navigation.queryParams)}`;
    const newURLwithParams = `${window.location.origin}${window.location.pathname}${newParams}`;

    window.history.pushState({ path: newURLwithParams }, '', newURLwithParams);
  };

  return state$.pipe(
    distinctUntilKeyChanged(
      'navigation',
      (first, second) => first.queryParams === second.queryParams
    ),
    skip(2), // 1st emit on Initial State, 2nd emit on Store Persistor Rehydrate
    tap((state) => setQueries(state)),
    ignoreElements()
  );
};
