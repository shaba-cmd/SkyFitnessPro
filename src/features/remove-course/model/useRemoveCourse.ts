import { useUser } from '@/entities/user';
import { removeCourseRequest } from '../api/removeCourseApi';

export const useRemoveCourse = () => {
  const { refreshUser } = useUser();

  const removeCourse = async (courseId: string) => {
    try {
      await removeCourseRequest(courseId);
      await refreshUser();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Не удалось удалить курс');
    }
  };

  return { removeCourse };
};
