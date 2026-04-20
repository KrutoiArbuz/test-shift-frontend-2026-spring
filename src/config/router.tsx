import { createBrowserRouter, Navigate } from 'react-router';

import App from '@/App';
import AuthPage from '@/App/pages/AuthPage';
import HomePage from '@/App/pages/HomePage';
import NotFoundPage from '@/App/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/auth" replace /> },
      { path: 'auth', element: <AuthPage /> },
      { path: 'home', element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
