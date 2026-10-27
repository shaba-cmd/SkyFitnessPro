import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById, type Course } from '@/entities/course';
import { useUser } from '@/entities/user';
import { getWorkout, getWorkoutProgress, parseWorkoutName, type Workout } from '@/entities/workout';
import { ProgressForm, saveProgressRequest } from '@/features/workout-progress';
import { Button, Modal, ProgressBar } from '@/shared/ui';
import checkIcon from '@/shared/assets/icons/check.svg';
import styles from './WorkoutPage.module.css';

export const WorkoutPage = () => {
  const { courseId = '', workoutId = '' } = useParams();
  const { refreshUser } = useUser();
  const [course, setCourse] = useState<Course | null>(null);
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [progressData, setProgressData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<'progress' | 'success' | null>(null);

  useEffect(() => {
    Promise.all([
      getCourseById(courseId),
      getWorkout(workoutId),
      getWorkoutProgress(courseId, workoutId).catch(() => null),
    ])
      .then(([courseData, workoutData, progress]) => {
        setCourse(courseData);
        setWorkout(workoutData);
        setProgressData(progress?.progressData ?? []);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [courseId, workoutId]);

  const closeModal = useCallback(() => setModal(null), []);

  useEffect(() => {
    if (modal !== 'success') return;
    const timer = setTimeout(closeModal, 2000);
    return () => clearTimeout(timer);
  }, [modal, closeModal]);

  if (isLoading) return <p>Загрузка...</p>;
  if (error || !course || !workout) return <p>{error ?? 'Тренировка не найдена'}</p>;

  const { title } = parseWorkoutName(workout.name);
  const hasExercises = workout.exercises.length > 0;
  const hasProgress = progressData.some((value) => value > 0);

  const saveProgress = async (data: number[]) => {
    await saveProgressRequest(courseId, workoutId, data);
    setProgressData(data);
    await refreshUser();
    setModal('success');
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{course.nameRU}</h1>

      <iframe
        className={styles.video}
        src={workout.video}
        title={workout.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <section className={styles.exercises}>
        <h2 className={styles.exercisesTitle}>Упражнения тренировки: {title}</h2>

        {hasExercises ? (
          <ul className={styles.list}>
            {workout.exercises.map((exercise, index) => {
              const done = progressData[index] ?? 0;
              const percent = exercise.quantity
                ? Math.min(100, Math.round((done / exercise.quantity) * 100))
                : 0;

              return (
                <li key={exercise._id} className={styles.exercise}>
                  <p className={styles.exerciseName}>
                    {exercise.name} {percent}%
                  </p>
                  <ProgressBar value={percent} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles.empty}>В этой тренировке нет упражнений — просто отметьте её.</p>
        )}

        <Button
          className={styles.btn}
          onClick={() => (hasExercises ? setModal('progress') : void saveProgress([]))}
        >
          {hasProgress ? 'Обновить свой прогресс' : 'Заполнить свой прогресс'}
        </Button>
      </section>

      {modal === 'progress' && (
        <Modal onClose={closeModal}>
          <ProgressForm
            exercises={workout.exercises}
            initial={progressData}
            onSubmit={saveProgress}
          />
        </Modal>
      )}

      {modal === 'success' && (
        <Modal onClose={closeModal} className={styles.success}>
          <p className={styles.successText}>Ваш прогресс засчитан!</p>
          <img src={checkIcon} alt="" className={styles.successIcon} />
        </Modal>
      )}
    </div>
  );
};
