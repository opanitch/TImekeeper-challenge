import { createSelector } from '@reduxjs/toolkit';

import { selectTimekeeper } from 'API/data/timekeeper/selectors';

export const getTimekeeperStatsView = createSelector(
  [selectTimekeeper],
  (timekeeper) => timekeeper
);

export default getTimekeeperStatsView;
