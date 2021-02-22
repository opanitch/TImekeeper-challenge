import { TIMEKEEPER } from 'CONSTANTS/state-slices';

import { getSliceOfState } from '../selectors';
import { StoreShape } from '../types';

import { TimekeeperState } from './types';

export const selectTimekeeper = (state: StoreShape): TimekeeperState =>
  getSliceOfState(state, TIMEKEEPER);
