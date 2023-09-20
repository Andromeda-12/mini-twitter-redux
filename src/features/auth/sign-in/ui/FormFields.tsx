import { Control } from 'react-hook-form';
import { CleanableFormField, PasswordFormField } from '@/shared/ui';
import {
  EMAIL_REGEXP,
  MAX_FIELD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '@/shared/constants';

interface FieldsProps {
  control: Control<any>;
  disabled?: boolean;
}

export const EmailField = ({ control, disabled }: FieldsProps) => (
  <CleanableFormField
    control={control}
    label="Email"
    name="email"
    rules={{
      required: 'Это поле обязательное',
      pattern: {
        value: EMAIL_REGEXP,
        message: 'Введите корректную почта',
      },
    }}
    disabled={disabled}
  />
);

export const PasswordField = ({ control, disabled }: FieldsProps) => (
  <PasswordFormField
    control={control}
    label="Пароль"
    name="password"
    rules={{
      required: 'Это поле обязательное',
      minLength: {
        value: 4,
        message: `Пароль не может быть короче ${MIN_PASSWORD_LENGTH} символов`,
      },
      maxLength: {
        value: 16,
        message: `Пароль не может быть длиннее ${MAX_FIELD_LENGTH} символов`,
      },
    }}
    disabled={disabled}
  />
);
