import { request } from '@/shared/api';

export const loginRequest = (email: string, password: string) =>
  request<{ token: string }>('/auth/login', { method: 'POST', body: { email, password } });

export const registerRequest = (email: string, password: string) =>
  request<{ message: string }>('/auth/register', { method: 'POST', body: { email, password } });
