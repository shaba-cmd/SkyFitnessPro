import yoga from '@/shared/assets/courses/Yoga.jpg';
import stretching from '@/shared/assets/courses/Stretching.jpg';
import stepairobic from '@/shared/assets/courses/StepAirobic.jpg';
import fitnes from '@/shared/assets/courses/Fitness.jpg';
import bodyflex from '@/shared/assets/courses/BodyFlex.jpg';

const images: Record<string, string> = {
  Yoga: yoga,
  Stretching: stretching,
  StepAirobic: stepairobic,
  Fitness: fitnes,
  BodyFlex: bodyflex,
};

export const getCourseImage = (nameEN: string) => images[nameEN] ?? yoga;