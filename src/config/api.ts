import axios from 'axios';

import { useAuthStore } from '@/store/useAuthStore';

import { getRevalidator } from './revalidator';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response.data && response.data.success === false) {
      return Promise.reject(new Error(response.data.reason || 'Ошибка сервера'));
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      getRevalidator()?.revalidate();
    }
    const reason = error.response?.data?.reason;
    return Promise.reject(reason ? new Error(reason) : error);
  }
);
