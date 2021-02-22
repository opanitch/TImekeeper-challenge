import { createReducer } from '@reduxjs/toolkit';

import { pageLoad, setQueryParams, setRoute } from './actions';
import { NavigationState } from './types';

const initialState: NavigationState = {
  history: [],
  route: [],
  hash: null,
  queryParams: {},
};

const navigationReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setQueryParams, (state, action) => ({
      ...state,
      ...action.payload,
    }))
    .addCase(setRoute, (state, action) => ({
      ...state,
      ...action.payload,
      history: [state.route].concat(state.history),
    }))
);

export default navigationReducer;
