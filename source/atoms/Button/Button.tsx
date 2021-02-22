import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  buttonTheme?: string;
};

export enum ButtonTheme {
  BASE = 'BASE',
  PRIMARY = 'PRIMARY',
}

const Button: FunctionComponent<ButtonProps> = ({
  buttonTheme = 'BASE',
  className: parentClasses,
  disabled = false,
  ...props
}) => {
  const buttonBaseState = !disabled;
  const buttonHoverState = !disabled;
  const buttonDisabledState = disabled;

  return (
    <button
      className={classnames(
        'block',
        {
          // Base State
          ['']: buttonTheme === ButtonTheme.BASE,
          ['px-3 py-1 border-2 border-transparent rounded-md']:
            buttonTheme === ButtonTheme.PRIMARY,
        },
        {
          // Base Theming
          ['']: buttonBaseState && buttonTheme === ButtonTheme.BASE,
          ['bg-grey-8 border-grey-8 text-white']:
            buttonBaseState && buttonTheme === ButtonTheme.PRIMARY,
        },
        {
          // Hover State
          ['']: buttonHoverState && buttonTheme === ButtonTheme.BASE,
          ['hover:bg-white hover:border-grey-8 hover:text-grey-8']:
            buttonHoverState && buttonTheme === ButtonTheme.PRIMARY,
        },
        {
          // Disabled State
          ['pointer-events-none cursor-pointer']: buttonDisabledState,
          ['']: buttonDisabledState && buttonTheme === ButtonTheme.BASE,
          ['bg-grey-6 border-grey-6 text-grey-7']:
            buttonDisabledState && buttonTheme === ButtonTheme.PRIMARY,
        },
        parentClasses
      )}
      disabled={disabled}
      {...props}
    />
  );
};

export default Button;
