import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as STATE_SLICES from 'CONSTANTS/state-slices';

import navigationReducer from './navigation/reducer';
import timekeeperReducer from './timekeeper/reducer';

const reducerObject = {
  [STATE_SLICES.NAVIGATION]: navigationReducer,
  [STATE_SLICES.TIMEKEEPER]: timekeeperReducer,
};
const rootReducer = combineReducers(reducerObject);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
