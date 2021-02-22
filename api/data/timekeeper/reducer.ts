import { createReducer } from '@reduxjs/toolkit';

import { pageLoad } from '../navigation/actions';

import { setTimekeeper } from './actions';
import { DEFAULT } from './constants';
import { TimekeeperState } from './types';

const initialState: TimekeeperState = {
  duration: 0,
  durationType: DEFAULT,
  endTime: 0,
  startTime: 0,
};

const timekeeperReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(pageLoad, (state, action) => ({
      ...state,
      endTime: action.payload.currentTime,
    }))
    .addCase(setTimekeeper, (state, action) => ({
      ...state,
      ...action.payload,
    }))
);

export default timekeeperReducer;
