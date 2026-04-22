import type { UserDto } from './userType';

export type OtpDto = {
  phone: string;
};

export type OtpResponse = {
  retryDelay: number;
  success: boolean;
  reason?: string;
};

export type SignInDto = {
  code: number;
  phone: string;
};

export type SignInResponse = {
  success: boolean;
  token: string;
  user: UserDto;
  reason?: string;
};

export type SessionResponse = {
  success: boolean;
  user: UserDto;
  reason?: string;
};
