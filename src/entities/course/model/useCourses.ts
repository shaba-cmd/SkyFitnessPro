import { useEffect, useState } from 'react';
import { getCourses } from '../api/courseApi';
import type { Course } from './types';

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCourses()
      .then((data) => setCourses([...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))))
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { courses, isLoading, error };
};