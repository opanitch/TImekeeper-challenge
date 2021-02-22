import React, { FunctionComponent, useState } from 'react';

import NumberInput, { LabelPosition } from 'Atoms/Inputs/NumberInput';
import Button, { ButtonTheme } from 'Atoms/Button/Button';

import { FormStateProps } from 'Components/Form/types';

import { TimeKeeperFormViewType } from '../types';

const EditTimeKeeperForm: FunctionComponent<
  FormStateProps<TimeKeeperFormViewType>
> = ({ viewState }: FormStateProps<TimeKeeperFormViewType>) => {
  const { inputs } = viewState;
  const { duration } = inputs;

  const [isDirty, setIsDirty] = useState(false);

  return (
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
  );
};

export default EditTimeKeeperForm;
