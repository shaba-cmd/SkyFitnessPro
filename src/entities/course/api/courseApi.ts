import { request } from '@/shared/api';
import type { Course } from '../model/types';

export const getCourses = () => request<Course[]>('/courses');

export const getCourseById = (courseId: string) => request<Course>(`/courses/${courseId}`);
