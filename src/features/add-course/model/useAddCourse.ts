import { useState } from 'react';
import { useUser } from '@/entities/user';
import { addCourseRequest } from '../api/addCourseApi';

export const useAddCourse = () => {
  const { user, refreshUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const isAdded = (courseId: string) => Boolean(user?.selectedCourses?.includes(courseId));

  const addCourse = async (courseId: string) => {
    setIsLoading(true);
    try {
      await addCourseRequest(courseId);
      await refreshUser();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Не удалось добавить курс');
    } finally {
      setIsLoading(false);
    }
  };

  return { addCourse, isAdded, isLoading };
};
