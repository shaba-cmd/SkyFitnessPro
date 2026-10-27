import { request } from '@/shared/api';

export const addCourseRequest = (courseId: string) =>
  request<{ message: string }>('/users/me/courses', {
    method: 'POST',
    body: { courseId },
    auth: true,
  });
