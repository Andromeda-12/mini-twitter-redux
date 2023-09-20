import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui';
import { routes } from '@/shared/constants';
import {
  DescriptionField,
  EmailField,
  FirstNameField,
  LastNameField,
  PasswordField,
  UploadProfileImageField,
} from './FormFields';
import { SignUpFormData, useSignUpLogic } from '../model';

const defaultValues: SignUpFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  image: null,
  description: '',
};

export const SignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpFormData>({
    defaultValues,
  });

  const navigate = useNavigate();
  const location = useLocation()
  
  const { signUp, isLoading } = useSignUpLogic();

  const onSubmit = async (data: SignUpFormData) => {
    await signUp(data);
    navigate({ pathname: location.state?.returnUrl ?? routes.MAIN_PAGE_PATH });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <FirstNameField control={control} disabled={isLoading} />
      <LastNameField control={control} disabled={isLoading} />
      <EmailField control={control} disabled={isLoading} />
      <PasswordField control={control} disabled={isLoading} />
      <UploadProfileImageField control={control} />
      <DescriptionField control={control} disabled={isLoading} />
      <Button className="mt-[8px]" disabled={isLoading}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
