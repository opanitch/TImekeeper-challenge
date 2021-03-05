import { FunctionComponent, ReactNode } from 'react';

import {
  InputProps,
  NumberInputProps,
  TextAreaInputProps,
} from 'Atoms/Inputs/types';

import FormEmpty from './FormEmpty';

export interface FormConfigType extends FormType {
  children: (args: RenderArguments) => ReactNode;
  id: string;
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

// Form Structure
interface RenderArguments {
  FormBody: FunctionComponent<FormBodyProps>;
  FormFooter: FunctionComponent<FormFooterProps>;
  FormHeader: FunctionComponent<FormHeaderProps>;
}

export type FormBodyProps = FormSection & {
  description?: string;
};

export type FormFooterProps = FormSection;

export interface FormHeaderProps extends FormSection {
  title: string;
}

export interface FormSection extends DivType {
  children?: ReactNode;
}

export interface FormStateProps<P = FormProps> extends DivType {
  description?: string;
  id: string;
  status: string;
  title?: string;
  viewState?: P extends FormProps ? P : never;
}

export interface FormStateSwitcher<P> {
  FormEdit: FunctionComponent<P>;
  FormEmpty?: FunctionComponent<P> | typeof FormEmpty;
}
