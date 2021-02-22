import { NAVIGATION } from 'CONSTANTS/state-slices';

import { getSliceOfState } from '../selectors';
import { StoreShape } from '../types';

import { NavigationState } from './types';

export const selectNavigation = (state: StoreShape): NavigationState =>
  getSliceOfState(state, NAVIGATION);
