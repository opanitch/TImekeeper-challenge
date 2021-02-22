import { Epic, combineEpics, createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Action, StoreShape } from './types';

import * as navigationEpics from './navigation/epics';
import * as timekeeperEpics from './timekeeper/epics';

const epics = [
  ...Object.values(navigationEpics),
  ...Object.values(timekeeperEpics),
] as Epic<Action, Action, StoreShape>[];

const epic$ = new BehaviorSubject(combineEpics(...epics));

const epicDependencies = {
  document: document,
  epic$: epic$,
  window: window,
};

export const middleware = createEpicMiddleware({
  dependencies: epicDependencies,
});

export const rootEpic: Epic<Action, Action, StoreShape> = (
  action$,
  state$,
  dependencies
) => epic$.pipe(mergeMap((epic) => epic(action$, state$, dependencies)));

export default middleware;
