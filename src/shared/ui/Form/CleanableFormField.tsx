import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { FormFieldContainer } from './FormFieldContainer';
import { Input } from '../Input';
import { Icon } from '../Icon';

interface CleanableFormFieldProps {
  control: Control<any>;
  name: string;
  rules: RegisterOptions<FieldValues, string>;
  label: string;
  disabled?: boolean
}

export const CleanableFormField = ({
  control,
  name,
  rules,
  label,
  disabled,
}: CleanableFormFieldProps) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <FormFieldContainer label={label} name={name} errorText={error?.message}>
        <Input
          {...field}
          disabled={disabled}
          error={!!error}
          endNode={
            field.value ? (
              <Icon iconName="cross" onClick={() => field.onChange('')} />
            ) : undefined
          }
        />
      </FormFieldContainer>
    )}
  />
);
