import { createSelector } from '@reduxjs/toolkit';
import { SyntheticEvent } from 'react';

import { store } from 'API/data/store';
import { selectNavigation } from 'API/data/navigation/selectors';
import { NavigationState } from 'API/data/navigation/types';
import { handleSubmit } from 'API/data/timekeeper/actions';
import { selectTimekeeper } from 'API/data/timekeeper/selectors';
import { TimekeeperState } from 'API/data/timekeeper/types';

import * as ROUTES from 'CONSTANTS/routes';

import { NumberInputProps } from 'Atoms/Inputs/types';

import { TimeKeeperFormViewType } from './types';

type ScreenForm =
  | typeof ROUTES.SCREEN_A
  | typeof ROUTES.SCREEN_B
  | typeof ROUTES.SCREEN_C;

const formInputs: Record<ScreenForm, NumberInputProps> = {
  [ROUTES.SCREEN_A]: {
    errorText: `{{@ cms.screen_a.form.inputs.duration.error @}}`,
    id: `duration-screen-a`,
    labelText: `{{@ cms.screen_a.form.inputs.duration.label @}}`,
    placeholder: `{{@ cms.screen_a.form.inputs.duration.placeholder @}}`,
    title: `{{@ cms.screen_a.form.inputs.duration.validationHelper @}}`,
  },
  [ROUTES.SCREEN_B]: {
    errorText: `{{@ cms.screen_b.form.inputs.duration.error @}}`,
    id: `duration-screen-b`,
    labelText: `{{@ cms.screen_b.form.inputs.duration.label @}}`,
    placeholder: `{{@ cms.screen_b.form.inputs.duration.placeholder @}}`,
    title: `{{@ cms.screen_b.form.inputs.duration.validationHelper @}}`,
  },
  [ROUTES.SCREEN_C]: {
    errorText: `{{@ cms.screen_c.form.inputs.duration.error @}}`,
    id: `duration-screen-c`,
    labelText: `{{@ cms.screen_c.form.inputs.duration.label @}}`,
    placeholder: `{{@ cms.screen_c.form.inputs.duration.placeholder @}}`,
    title: `{{@ cms.screen_c.form.inputs.duration.validationHelper @}}`,
  },
};

const getTimeKeeperView = createSelector(
  [selectNavigation, selectTimekeeper],
  (
    { route }: NavigationState,
    { duration }: TimekeeperState
  ): TimeKeeperFormViewType => {
    const formVariations = Object.keys(formInputs);
    const currentPage = // temp check for undefined while working out epics
      (route &&
        (formVariations.find((form) =>
          form.includes(route[0])
        ) as ScreenForm)) ||
      ROUTES.SCREEN_A;

    const inputProps = formInputs[currentPage];

    return {
      actions: {
        onSubmit: (event: SyntheticEvent) => {
          event.preventDefault();
          store.dispatch(handleSubmit(event.target[0].value));
        },
      },
      inputs: {
        duration: {
          errorText: inputProps.errorText,
          id: inputProps.id || 'error',
          labelText: inputProps.labelText,
          placeholder: !duration ? `${inputProps.placeholder}` : `${duration}`,
          title: inputProps.title,
          type: 'number',
          value: !duration ? 0 : duration,
        },
      },
    };
  }
);

export default getTimeKeeperView;
