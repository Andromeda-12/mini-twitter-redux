import { useUpdateAvatarMutation, useViewerQuery, userApi } from '../api';

export const userModel = {
  hooks: {
    useUpdateAvatarMutation,
    useViewerQuery,
  },
  userApi,
};
