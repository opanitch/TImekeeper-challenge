import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import * as STATUSES from 'CONSTANTS/status';

import Form, { FormSwitcher } from 'Components/Form/Form';

import EditContactForm from './states/EditForm';
import { TimeKeeperFormType } from './types';
import getTimeKeeperView from './view-state';

const TimeKeeperForm: FunctionComponent<TimeKeeperFormType> = ({
  className: parentClasses,
  description,
  id,
  title,
}) => {
  const [formStatus, setStatus] = useState(STATUSES.EMPTY);
  const viewState = useSelector(getTimeKeeperView);

  useEffect(() => {
    setStatus(STATUSES.READY);
  }, []);

  return (
    <Form
      className={parentClasses}
      description={description}
      FormBody={FormSwitcher({
        FormEdit: EditContactForm,
      })}
      id={id}
      status={formStatus}
      title={title}
      viewState={viewState}
    />
  );
};

export default TimeKeeperForm;
