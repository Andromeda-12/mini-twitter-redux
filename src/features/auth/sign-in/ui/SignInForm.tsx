import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { sessionModel } from '@/entities/session';
import { Button } from '@/shared/ui';
import { AuthLoginDto } from '@/shared/api';
import { routes } from '@/shared/constants';
import { EmailField, PasswordField } from './FormFields';

const defaultValues: AuthLoginDto = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const { control, handleSubmit } = useForm<AuthLoginDto>({
    defaultValues,
  });

  const navigate = useNavigate();
  const location = useLocation()

  const [signIn, { isLoading }] = sessionModel.hooks.useSignInMutation();

  const onSubmit = async (data: AuthLoginDto) => {
    await signIn(data).unwrap()
    navigate({ pathname: location.state?.returnUrl ?? routes.MAIN_PAGE_PATH });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <EmailField control={control} disabled={isLoading} />
      <PasswordField control={control} disabled={isLoading} />
      <Button className="mt-[8px]" disabled={isLoading} data-testid="sign-in-button">
        Войти
      </Button>
    </form>
  );
};
