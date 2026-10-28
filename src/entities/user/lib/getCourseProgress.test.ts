import { describe, expect, it } from '@jest/globals';
import { getCourseProgressPercent } from './getCourseProgress';
import type { User } from '../model/types';

const user: User = {
  email: 'test@mail.ru',
  selectedCourses: ['yoga'],
  courseProgress: [
    {
      courseId: 'yoga',
      courseCompleted: false,
      workoutsProgress: [
        { workoutId: 'w1', workoutCompleted: true, progressData: [10] },
        { workoutId: 'w2', workoutCompleted: false, progressData: [1] },
      ],
    },
  ],
};

describe('getCourseProgressPercent', () => {
  it('считает процент выполненных тренировок', () => {
    expect(getCourseProgressPercent(user, 'yoga', 4)).toBe(25);
  });

  it('возвращает 0, если прогресса по курсу нет', () => {
    expect(getCourseProgressPercent(user, 'fitness', 5)).toBe(0);
  });

  it('возвращает 0, если в курсе нет тренировок', () => {
    expect(getCourseProgressPercent(user, 'yoga', 0)).toBe(0);
  });
});
