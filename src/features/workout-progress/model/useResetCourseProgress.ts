import { useUser } from '@/entities/user';
import { resetCourseProgressRequest } from '../api/progressApi';

export const useResetCourseProgress = () => {
  const { refreshUser } = useUser();

  const resetCourseProgress = async (courseId: string) => {
    await resetCourseProgressRequest(courseId);
    await refreshUser();
  };

  return { resetCourseProgress };
};