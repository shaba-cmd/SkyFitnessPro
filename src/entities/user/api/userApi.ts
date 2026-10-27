import { request } from '@/shared/api';
import type { User } from '../model/types';

export const getMe = () => request<User>('/users/me', { auth: true });