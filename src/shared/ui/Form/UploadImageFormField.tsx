import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { FormFieldContainer } from './FormFieldContainer';
import { UploadImage } from '../UploadImage';

interface UploadImageFormFieldProps {
  control: Control<any>;
  name: string;
  rules: RegisterOptions<FieldValues, string>;
  label: string;
  className?: string
}

export const UploadImageFormField = ({
  control,
  name,
  rules,
  label,
  className,
}: UploadImageFormFieldProps) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange }, fieldState: { error } }) => (
      <FormFieldContainer label={label} name={name} errorText={error?.message}>
        <UploadImage id={name} className={className} onChange={onChange} />
      </FormFieldContainer>
    )}
  />
);
