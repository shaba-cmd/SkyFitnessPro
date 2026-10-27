import { request } from '@/shared/api';
import type { Workout, WorkoutProgressData } from '../model/types';

export const getCourseWorkouts = (courseId: string) =>
  request<Workout[]>(`/courses/${courseId}/workouts`, { auth: true });

export const getWorkout = (workoutId: string) =>
  request<Workout>(`/workouts/${workoutId}`, { auth: true });

export const getWorkoutProgress = (courseId: string, workoutId: string) =>
  request<WorkoutProgressData>(`/users/me/progress?courseId=${courseId}&workoutId=${workoutId}`, {
    auth: true,
  });
