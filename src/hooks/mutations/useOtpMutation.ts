import { useMutation } from '@tanstack/react-query';

import { createOtp } from '@/api/auth';

export const useOtpMutation = () => {
  return useMutation({
    mutationFn: createOtp,
  });
};
