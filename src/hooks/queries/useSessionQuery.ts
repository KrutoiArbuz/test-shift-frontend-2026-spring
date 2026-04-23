import { queryOptions, useQuery } from '@tanstack/react-query';

import { fetchSession } from '@/api/auth';
import { useAuthStore } from '@/store/useAuthStore';
import { normalizeUser } from '@/utils/normalizer';

export const sessionQueryOptions = () =>
  queryOptions({
    queryKey: ['session'],
    queryFn: ({ signal }) => fetchSession(signal),
    select: (data) => normalizeUser(data.user),
    staleTime: Infinity,
  });

export const useSessionQuery = () => {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    ...sessionQueryOptions(),
    enabled: !!token,
  });
};
