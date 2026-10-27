import yoga from '@/shared/assets/courses/Yoga.jpg';
import stretching from '@/shared/assets/courses/Stretching.jpg';
import stepairobic from '@/shared/assets/courses/StepAirobic.jpg';
import fitnes from '@/shared/assets/courses/Fitness.jpg';
import bodyflex from '@/shared/assets/courses/BodyFlex.jpg';

import yogaBanner from '@/shared/assets/banners/Yoga.png';
import stretchingBanner from '@/shared/assets/banners/Stretching.png';
import fitnessBanner from '@/shared/assets/banners/Fitness.png';
import stepBanner from '@/shared/assets/banners/StepAirobic.png';
import bodyflexBanner from '@/shared/assets/banners/BodyFlex.png';

const images: Record<string, string> = {
  Yoga: yoga,
  Stretching: stretching,
  StepAirobic: stepairobic,
  Fitness: fitnes,
  BodyFlex: bodyflex,
};

const banners: Record<string, string> = {
  Yoga: yogaBanner,
  Stretching: stretchingBanner,
  Fitness: fitnessBanner,
  StepAirobic: stepBanner,
  BodyFlex: bodyflexBanner,
};

export const getCourseBanner = (nameEN: string) => banners[nameEN] ?? yogaBanner;
export const getCourseImage = (nameEN: string) => images[nameEN] ?? yoga;
