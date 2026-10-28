import yoga from '@/shared/assets/courses/Yoga.jpg';
import stretching from '@/shared/assets/courses/Stretching.jpg';
import fitness from '@/shared/assets/courses/Fitness.jpg';
import stepAirobic from '@/shared/assets/courses/StepAirobic.jpg';
import bodyFlex from '@/shared/assets/courses/BodyFlex.jpg';

import yogaBanner from '@/shared/assets/banners/Yoga.jpg';
import stretchingBanner from '@/shared/assets/banners/Stretching.jpg';
import fitnessBanner from '@/shared/assets/banners/Fitness.jpg';
import stepAirobicBanner from '@/shared/assets/banners/StepAirobic.jpg';
import bodyFlexBanner from '@/shared/assets/banners/BodyFlex.jpg';

const images: Record<string, string> = {
  Yoga: yoga,
  Stretching: stretching,
  Fitness: fitness,
  StepAirobic: stepAirobic,
  BodyFlex: bodyFlex,
};

const banners: Record<string, string> = {
  Yoga: yogaBanner,
  Stretching: stretchingBanner,
  Fitness: fitnessBanner,
  StepAirobic: stepAirobicBanner,
  BodyFlex: bodyFlexBanner,
};

const colors: Record<string, string> = {
  Yoga: '#ffc700',
  Stretching: '#2491d2',
  Fitness: '#f7a012',
  StepAirobic: '#ff7e65',
  BodyFlex: '#7d458c',
};

export const getCourseColor = (nameEN: string) => colors[nameEN] ?? colors.Yoga;
export const getCourseImage = (nameEN: string) => images[nameEN] ?? yoga;
export const getCourseBanner = (nameEN: string) => banners[nameEN] ?? yogaBanner;
