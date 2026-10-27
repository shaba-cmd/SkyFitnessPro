export type User = {
  email: string;
  selectedCourses: string[];
  courseProgress?: CourseProgress[];
};

export type WorkoutProgress = {
  workoutId: string;
  workoutCompleted: boolean;
  progressData: number[];
};

export type CourseProgress = {
  courseId: string;
  courseCompleted: boolean;
  workoutsProgress: WorkoutProgress[];
};
