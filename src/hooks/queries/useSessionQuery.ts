import { useQuery } from '@tanstack/react-query';

import { fetchSession } from '@/api/auth';
import { useAuthStore } from '@/store/useAuthStore';
import { normalizeUser } from '@/utils/normalizer';

export const useSessionQuery = () => {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ['session'],
    queryFn: ({ signal }) => fetchSession(signal),
    select: (data) => normalizeUser(data.user),
    staleTime: Infinity,
    enabled: !!token,
  });
};
