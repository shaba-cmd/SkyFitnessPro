import { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useUser } from '@/entities/user';
import { getCourseWorkouts, parseWorkoutName, type Workout } from '@/entities/workout';
import { Button, Modal } from '@/shared/ui';
import { ROUTES } from '@/shared/config/routes';
import checkIcon from '@/shared/assets/icons/check.svg';
import styles from './SelectWorkoutModal.module.css';

type Props = {
  courseId: string;
  onClose: () => void;
};

export const SelectWorkoutModal = ({ courseId, onClose }: Props) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCourseWorkouts(courseId)
      .then(setWorkouts)
      .catch(() => setWorkouts([]))
      .finally(() => setIsLoading(false));
  }, [courseId]);

  const completedIds = new Set(
    user?.courseProgress
      ?.find((item) => item.courseId === courseId)
      ?.workoutsProgress.filter((w) => w.workoutCompleted)
      .map((w) => w.workoutId),
  );

  return (
    <Modal onClose={onClose} className={styles.modal}>
      <h2 className={styles.title}>Выберите тренировку</h2>

      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <ul className={styles.list}>
          {workouts.map((workout) => {
            const { title, subtitle } = parseWorkoutName(workout.name);
            const isSelected = selectedId === workout._id;

            return (
              <li key={workout._id} className={styles.row}>
                <label className={styles.item}>
                  <input
                    type="radio"
                    name="workout"
                    className={styles.radio}
                    checked={isSelected}
                    onChange={() => setSelectedId(workout._id)}
                  />
                  {completedIds.has(workout._id) ? (
                    <img src={checkIcon} alt="Выполнено" className={styles.icon} />
                  ) : (
                    <span className={cn(styles.circle, isSelected && styles.circleActive)} />
                  )}
                  <span>
                    <span className={styles.name}>{title}</span>
                    {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      )}

      <Button
        className={styles.btn}
        disabled={!selectedId}
        onClick={() =>
          selectedId && navigate(generatePath(ROUTES.WORKOUT, { courseId, workoutId: selectedId }))
        }
      >
        Начать
      </Button>
    </Modal>
  );
};
