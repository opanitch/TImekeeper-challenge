import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import Label from './Label';
import { NumberInputProps } from './types';

export enum LabelPosition {
  LEFT = 'LEFT',
  TOP_LEFT = 'TOP_LEFT',
}

const NumberInput: FunctionComponent<NumberInputProps> = ({
  className: parentClasses,
  disabled,
  errorText,
  id,
  labelPosition = LabelPosition.TOP_LEFT,
  labelText,
  pattern,
  regex,
  required,
  title,
  ...props
}) => {
  return (
    <div
      className={classnames(
        'flex',
        {
          ['flex-row']: labelPosition === LabelPosition.LEFT,
          ['flex-col']: labelPosition === LabelPosition.TOP_LEFT,
        },
        parentClasses
      )}
    >
      {labelText && (
        <Label
          className={classnames({
            ['mb-1']: labelPosition === LabelPosition.TOP_LEFT,
          })}
          htmlFor={id}
          required={required}
          text={labelText}
        />
      )}
      <input
        className="p-2 border-gray-300 border-1"
        disabled={disabled}
        id={id}
        required={required}
        title={title}
        {...props}
        type="number"
      />
    </div>
  );
};

export default NumberInput;
