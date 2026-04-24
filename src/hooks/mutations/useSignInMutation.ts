import { useMutation } from '@tanstack/react-query';

import { signInUser } from '@/api/auth';
import { useAuthStore } from '@/store/useAuthStore';

export const useSignInMutation = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => setToken(data.token),
  });
};
