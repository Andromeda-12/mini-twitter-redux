import { Control } from 'react-hook-form';
import {
  CleanableFormField,
  PasswordFormField,
  TextareaFormField,
  UploadImageFormField,
} from '@/shared/ui';
import {
  EMAIL_REGEXP,
  MAX_FIELD_LENGTH,
  MAX_PROFILE_IMAGE_SIZE,
  MIN_FIELD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '@/shared/constants';

interface FieldsProps {
  control: Control<any>;
  disabled?: boolean;
}

export const FirstNameField = ({ control, disabled }: FieldsProps) => (
  <CleanableFormField
    control={control}
    label="Имя"
    name="firstName"
    disabled={disabled}
    rules={{
      required: 'Это поле обязательное',
      minLength: {
        value: 2,
        message: `Имя не может быть короче ${MIN_FIELD_LENGTH} символов`,
      },
      maxLength: {
        value: 16,
        message: `Имя не может быть длиннее ${MAX_FIELD_LENGTH} символов`,
      },
    }}
  />
);

export const LastNameField = ({ control, disabled }: FieldsProps) => (
  <CleanableFormField
    control={control}
    label="Фамилия"
    name="lastName"
    disabled={disabled}
    rules={{
      required: 'Это поле обязательное',
      minLength: {
        value: 2,
        message: `Фамилия не может быть короче ${MIN_FIELD_LENGTH} символов`,
      },
      maxLength: {
        value: 16,
        message: `Фамилия не может быть длиннее ${MAX_FIELD_LENGTH} символов`,
      },
    }}
  />
);

export const EmailField = ({ control, disabled }: FieldsProps) => (
  <CleanableFormField
    control={control}
    label="Email"
    name="email"
    disabled={disabled}
    rules={{
      required: 'Это поле обязательное',
      pattern: {
        value: EMAIL_REGEXP,
        message: 'Невалидная почта',
      },
    }}
  />
);

export const PasswordField = ({ control, disabled }: FieldsProps) => (
  <PasswordFormField
    control={control}
    label="Пароль"
    name="password"
    hasPasswordStrengthProgress
    disabled={disabled}
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
  />
);

export const UploadProfileImageField = ({ control }: FieldsProps) => (
  <UploadImageFormField
    control={control}
    label="Фото профиля"
    name="image"
    rules={{
      validate: file => {
        if (!file) {
          return true;
        }
        if ((file as File).size > MAX_PROFILE_IMAGE_SIZE) {
          return `Изображение не может быть больше ${
            MAX_PROFILE_IMAGE_SIZE / 1024 / 1024
          } mb`;
        }
        return true;
      },
    }}
  />
);

export const DescriptionField = ({ control }: FieldsProps) => (
  <TextareaFormField
    control={control}
    label="Описание профиля"
    name="description"
  />
);
