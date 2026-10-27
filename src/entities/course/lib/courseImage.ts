import yoga from '@/shared/assets/courses/Yoga.jpg';
import stretching from '@/shared/assets/courses/Stretching.jpg';
import fitness from '@/shared/assets/courses/Fitness.jpg';
import stepAirobic from '@/shared/assets/courses/StepAirobic.jpg';
import bodyFlex from '@/shared/assets/courses/BodyFlex.jpg';

type CourseVisual = {
  image: string;
  color: string;
};

const visuals: Record<string, CourseVisual> = {
  Yoga: { image: yoga, color: '#ffc700' },
  Stretching: { image: stretching, color: '#2491d2' },
  Fitness: { image: fitness, color: '#f7a012' },
  StepAirobic: { image: stepAirobic, color: '#ff7e65' },
  BodyFlex: { image: bodyFlex, color: '#7d458c' },
};

export const getCourseVisual = (nameEN: string) => visuals[nameEN] ?? visuals.Yoga;