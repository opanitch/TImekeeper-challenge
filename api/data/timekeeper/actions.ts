import { createAction } from '@reduxjs/toolkit';

import { TimekeeperState } from './types';

export const handleSubmit = createAction(
  'TIMEKEEPER_FORM_SUBMIT',
  (formData: number) => ({
    payload: {
      duration: formData,
    },
  })
);

export const setTimekeeper = createAction(
  'SET_DURATION',
  ({ duration, durationType, endTime, startTime }: TimekeeperState) => ({
    payload: { duration, durationType, endTime, startTime },
  })
);
