import React, { FunctionComponent } from 'react';

import * as STATUSES from 'CONSTANTS/status';

import EmptyView from './FormEmpty';
import FormHeader from './FormHeader';
import { FormConfigType, FormStateProps, FormStateSwitcher } from './types';

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
        return <div>Default</div>;
    }
  };
};

const Form: FunctionComponent<FormConfigType> = ({
  className: parentClasses,
  description,
  FormBody,
  id,
  status,
  title,
  viewState,
}) => {
  const { actions } = viewState;
  const { onChange, onSubmit } = actions;

  return (
    <form
      className={parentClasses}
      id={id}
      onChange={onChange}
      onSubmit={onSubmit}
      noValidate
    >
      {(description || title) && (
        <FormHeader title={title} description={description} />
      )}
      <FormBody status={status} viewState={viewState} />
    </form>
  );
};

export default Form;
