import { createBrowserRouter, Navigate, redirect } from 'react-router';

import App from '@/App';
import AuthPage from '@/App/pages/AuthPage';
import NotFoundPage from '@/App/pages/NotFoundPage';
import FullScreenLoader from '@/components/FullScreenLoader';
import RouterErrorBoundary from '@/components/RouterErrorBoundary';
import { sessionQueryOptions } from '@/hooks/queries/useSessionQuery';
import { useAuthStore } from '@/store/useAuthStore';

import { queryClient } from './queryClient';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    hydrateFallbackElement: <FullScreenLoader />,
    children: [
      { index: true, element: <Navigate to="/auth" replace /> },
      { path: 'auth', element: <AuthPage /> },
      {
        id: 'protected',
        loader: async () => {
          const token = useAuthStore.getState().token;
          if (!token) {
            throw redirect('/auth');
          }
          try {
            await queryClient.ensureQueryData(sessionQueryOptions());
          } catch {
            throw redirect('/auth');
          }
          return null;
        },
        errorElement: <RouterErrorBoundary />,
        children: [
          {
            path: 'home',
            lazy: async () => {
              const { default: HomePage } = await import('@/App/pages/HomePage');
              return {
                Component: HomePage,
              };
            },
          },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
