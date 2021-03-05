import React, { FormEvent, FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

import { store } from 'API/data/store';
import { handleSubmit } from 'API/data/timekeeper/actions';

import NumberInput, { LabelPosition } from 'Atoms/Inputs/NumberInput';
import Button, { ButtonTheme } from 'Atoms/Button/Button';

import Form from 'Components/Form/Form';
import { FormStateProps } from 'Components/Form/types';

import { TimeKeeperFormViewType } from '../types';
import getTimeKeeperView from '../view-state';

const EditTimeKeeperForm: FunctionComponent<
  FormStateProps<TimeKeeperFormViewType>
> = ({
  className: parentClasses,
  id,
  title,
}: FormStateProps<TimeKeeperFormViewType>) => {
  const viewState = useSelector(getTimeKeeperView);
  const { inputs } = viewState;
  const { duration } = inputs;

  const [isDirty, setIsDirty] = useState(false);

  return (
    <Form
      className={parentClasses}
      id={id}
      onChange={(event: FormEvent<HTMLFormElement>) => {
        console.log(event);
      }}
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        const form = event.target as HTMLFormElement;

        store.dispatch(handleSubmit(form[0].value));
      }}
    >
      {({ FormBody, FormHeader }) => (
        <>
          {title && <FormHeader title={title} />}
          <FormBody
            className="mt-3"
            description={`{{@ cms.contact.form.description @}}`}
          >
            <div className="flex items-end mt-3">
              <NumberInput
                className="w-full md:w-1/2 md:pr-1"
                defaultValue={duration.value}
                errorText={duration.errorText}
                id={duration.id}
                labelText={duration.labelText}
                labelPosition={LabelPosition.TOP_LEFT}
                // restrict to positive numbers
                min="0"
                onChange={(event) => {
                  const currentValue = event.target.value;
                  const defaultValue = event.target.defaultValue;

                  setIsDirty(currentValue !== defaultValue);
                }}
                placeholder={duration.placeholder}
                required={true}
                title={duration.title}
              />
              <Button
                buttonTheme={ButtonTheme.PRIMARY}
                className="md:mb-1"
                disabled={!isDirty}
                type="submit"
              >{`{{@ cms.site.common.update @}}`}</Button>
            </div>
          </FormBody>
        </>
      )}
    </Form>
  );
};

export default EditTimeKeeperForm;
