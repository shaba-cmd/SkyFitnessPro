import { request } from '@/shared/api';

export const removeCourseRequest = (courseId: string) =>
  request<{ message: string }>(`/users/me/courses/${courseId}`, { method: 'DELETE', auth: true });
