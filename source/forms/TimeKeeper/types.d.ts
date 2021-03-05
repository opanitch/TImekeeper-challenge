import { SCREEN_A, SCREEN_B, SCREEN_C } from 'CONSTANTS/forms';

import { NumberInputProps } from 'Atoms/Inputs/types';
import { FormConfigType, FormProps } from 'Components/Form/types';

export type TimeKeeperFormType = Pick<
  FormConfigType,
  'className' | 'description' | 'title'
> & {
  id: typeof SCREEN_A | typeof SCREEN_B | typeof SCREEN_C;
};

export type TimeKeeperFormViewType = Pick<FormProps, 'actions'> & {
  inputs: {
    duration: NumberInputProps;
  };
};
