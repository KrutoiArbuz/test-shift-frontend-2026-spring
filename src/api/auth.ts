import { api } from '@/config/api';
import type {
  OtpDto,
  OtpResponse,
  SessionResponse,
  SignInDto,
  SignInResponse,
} from '@/types/authType';

export const createOtp = async (data: OtpDto): Promise<OtpResponse> => {
  const response = await api.post('/auth/otp', data);
  return response.data;
};

export const signInUser = async (data: SignInDto): Promise<SignInResponse> => {
  const response = await api.post('/users/signin', data);
  return response.data;
};

export const fetchSession = async (signal?: AbortSignal): Promise<SessionResponse> => {
  const response = await api.get('/users/session', { signal });
  return response.data;
};
