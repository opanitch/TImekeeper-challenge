import { FunctionComponent } from 'react';

import * as STATUSES from 'CONSTANTS/status';

import {
  InputProps,
  NumberInputProps,
  TextAreaInputProps,
} from 'Atoms/Inputs/types';

import FormEmpty from './FormEmpty';

export interface FormConfigType extends FormType {
  description?: string;
  FormBody: FunctionComponent<FormStateProps<any>>;
  id: string;
  status: string;
  title?: string;
  viewState: FormProps;
}

export interface FormProps {
  actions: {
    onChange?: any;
    onSubmit: any;
  };
  description?: string;
  inputs: Record<string, InputProps | NumberInputProps | TextAreaInputProps>;
  title?: string;
}

export interface FormStateProps<P = FormProps> {
  status: string;
  viewState: P extends FormProps ? P : never;
}

export interface FormStateSwitcher<P> {
  FormEdit: FunctionComponent<P>;
  FormEmpty?: FunctionComponent<P> | typeof FormEmpty;
}

export type FormStatuses = UnionOf<typeof STATUSES>;
