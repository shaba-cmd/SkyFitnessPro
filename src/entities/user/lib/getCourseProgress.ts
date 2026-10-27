import type { User } from '../model/types';

export const getCourseProgressPercent = (user: User, courseId: string, totalWorkouts: number) => {
  if (!totalWorkouts) return 0;

  const progress = user.courseProgress?.find((item) => item.courseId === courseId);
  const completed = progress?.workoutsProgress.filter((w) => w.workoutCompleted).length ?? 0;

  return Math.round((completed / totalWorkouts) * 100);
};
