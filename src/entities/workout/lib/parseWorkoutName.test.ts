import { describe, expect, it } from '@jest/globals';
import { parseWorkoutName } from './parseWorkoutName';

describe('parseWorkoutName', () => {
  it('делит название на заголовок и подзаголовок', () => {
    expect(parseWorkoutName('Утренняя практика / Йога на каждый день / 1 день')).toEqual({
      title: 'Утренняя практика',
      subtitle: 'Йога на каждый день / 1 день',
    });
  });

  it('возвращает пустой подзаголовок, если разделителя нет', () => {
    expect(parseWorkoutName('Урок 1')).toEqual({ title: 'Урок 1', subtitle: '' });
  });
});
