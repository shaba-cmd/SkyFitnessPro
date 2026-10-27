export const parseWorkoutName = (name: string) => {
  const [title, ...rest] = name.split(' / ');
  return { title, subtitle: rest.join(' / ') };
};
