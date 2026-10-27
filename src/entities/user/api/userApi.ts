import { request } from '@/shared/api';
import type { User } from '../model/types';

type MeResponse = User | { user: User };

export const getMe = async () => {
  const data = await request<MeResponse>('/users/me', { auth: true });
  return 'user' in data ? data.user : data;
};