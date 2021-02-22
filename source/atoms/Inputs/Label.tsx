import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { LabelProps } from './types';

const Label: FunctionComponent<LabelProps> = ({
  className: parentClasses,
  htmlFor,
  required,
  text,
  ...props
}) => {
  return (
    <label
      className={classnames(
        'font-nugo text-scale-n1 md:text-scale-0 tracking-wide',
        parentClasses
      )}
      htmlFor={htmlFor}
      {...props}
    >
      {text}
      {required && <span className="text-red-700">*</span>}
    </label>
  );
};

export default Label;
