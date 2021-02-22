import { Epic } from 'redux-observable';
import { filter, mergeMap, withLatestFrom } from 'rxjs/operators';

import { Action, StoreShape } from '../types';

import { setQueryParams } from '../navigation/actions';

import { handleSubmit, setTimekeeper } from './actions';
import { CUSTOM } from './constants';
import { convertMinutesToMilliseconds } from './helpers';

export const formSubmit: Epic<Action, Action, StoreShape> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(handleSubmit.match),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const newTime = Date.now();
      const { duration } = action.payload;
      const newTimekeeper = {
        duration,
        endTime: newTime,
        startTime: newTime - convertMinutesToMilliseconds(duration),
      };

      console.log('FORM SUBMIT');
      console.log({
        ...state.navigation.queryParams,
        ...newTimekeeper,
      });

      return [
        setTimekeeper({
          ...newTimekeeper,
          durationType: CUSTOM,
        }),
        setQueryParams({
          ...state.navigation.queryParams,
          ...newTimekeeper,
        }),
      ];
    })
  );
};
