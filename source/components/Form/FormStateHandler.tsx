import React, { FunctionComponent } from 'react';

import * as STATUSES from 'CONSTANTS/status';

import EmptyView from './states/FormEmpty';
import { FormStateProps, FormStateSwitcher } from './types';

export const FormSwitcher = <Props extends FormStateProps<any>>({
  FormEdit,
  FormEmpty = EmptyView,
}: FormStateSwitcher<Props>): FunctionComponent<Props> => {
  return (props: Props) => {
    const { status } = props;

    switch (status) {
      case STATUSES.EMPTY:
        return <FormEmpty {...props} />;
      case STATUSES.READY:
        return <FormEdit {...props} />;
      default:
        return <FormEmpty {...props} />;
    }
  };
};
