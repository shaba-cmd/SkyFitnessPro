import { request } from '@/shared/api';

export const saveProgressRequest = (courseId: string, workoutId: string, progressData: number[]) =>
  request<{ message: string }>(`/courses/${courseId}/workouts/${workoutId}`, {
    method: 'PATCH',
    body: { progressData },
    auth: true,
  });

export const resetCourseProgressRequest = (courseId: string) =>
  request<{ message: string }>(`/courses/${courseId}/reset`, { method: 'PATCH', auth: true });
