import { createAsyncThunk } from '@reduxjs/toolkit';
import { sessionApi, sessionModel } from '@/entities/session';
import { userModel } from '@/entities/user';

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: File | null;
  description: string;
}

export const signUpThunk = createAsyncThunk<
  void,
  SignUpFormData,
  { state: RootState }
>('authentication/login', async (body: SignUpFormData, { dispatch }) => {
  await dispatch(sessionApi.endpoints.signUp.initiate(body));

  await dispatch(sessionApi.endpoints.signIn.initiate(body));

  if (body.image) {
    await dispatch(
      userModel.userApi.endpoints.updateAvatar.initiate({ file: body.image })
    );
  }
});

export const useSignUpLogic = () => {
  const [signUpMutation, { isLoading: isSignUpLoading }] =
    sessionModel.hooks.useSignUpMutation();
  const [signInMutation, { isLoading: isSignInLoading }] =
    sessionModel.hooks.useSignInMutation();
  const [updateAvatarMutation, { isLoading: isUpdateAvatarLoading }] =
    userModel.hooks.useUpdateAvatarMutation();

  const signUp = async (data: SignUpFormData) => {
    await signUpMutation(data).unwrap();
    await signInMutation(data).unwrap();

    if (data.image) {
      await updateAvatarMutation({ file: data.image }).unwrap();
    }
  };

  return {
    signUp,
    isLoading: isSignUpLoading || isSignInLoading || isUpdateAvatarLoading,
  };
};
