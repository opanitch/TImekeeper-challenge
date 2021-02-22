import * as STATE_SLICES from 'CONSTANTS/state-slices';

import { NavigationState } from './navigation/types';
// import store from './store';
import { TimekeeperState } from './timekeeper/types';

export interface Action {
  type: string;
  payload?: any;
  error?: boolean;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type AppDispatch = typeof store.dispatch;

// export type BaseState = ReturnType<typeof store.getState>;

type _PersistState = {
  rehydrated: boolean;
  version: number;
};

export interface StoreShape {
  [STATE_SLICES._PERSIST]: _PersistState;
  [STATE_SLICES.NAVIGATION]: NavigationState;
  [STATE_SLICES.TIMEKEEPER]: TimekeeperState;
}

export type StoreKey = keyof StoreShape;
