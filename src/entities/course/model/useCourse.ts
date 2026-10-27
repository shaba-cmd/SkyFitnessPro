import { useEffect, useState } from 'react';
import { getCourseById } from '../api/courseApi';
import type { Course } from './types';

export const useCourse = (courseId?: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseId) return;

    getCourseById(courseId)
      .then(setCourse)
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [courseId]);

  return { course, isLoading, error };
};
