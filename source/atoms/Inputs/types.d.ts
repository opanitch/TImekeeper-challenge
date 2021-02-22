export type LabelProps = JSX.IntrinsicElements['label'] & {
  htmlFor: string;
  required?: boolean;
  text: string;
};

export type InputProps = JSX.IntrinsicElements['input'] & {
  disabled?: boolean;
  errorText?: string;
  id: string;
  labelPosition?: string;
  labelText?: string;
  value?: string | number | boolean;
};

export type NumberInputProps = InputProps & {
  type?: 'number';
  value?: number;
};

export type TextAreaInputProps = JSX.IntrinsicElements['textarea'] & {
  errorText?: string;
  id: string;
  labelPosition?: string;
  labelText?: string;
};
