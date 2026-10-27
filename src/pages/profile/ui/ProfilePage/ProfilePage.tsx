import styles from './ProfilePage.module.css';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { CourseCard, useCourses } from '@/entities/course';
import { getCourseProgressPercent, useUser } from '@/entities/user';
import { RemoveCourseButton, useRemoveCourse } from '@/features/remove-course';
import { useResetCourseProgress } from '@/features/workout-progress';
import { SelectWorkoutModal } from '@/widgets/select-workout-modal';
import { Button, ProgressBar } from '@/shared/ui';
import { ROUTES } from '@/shared/config/routes';

const getButtonText = (progress: number) => {
  if (progress === 0) return 'Начать тренировки';
  if (progress === 100) return 'Начать заново';
  return 'Продолжить';
};

export const ProfilePage = () => {
  const { user, logout } = useUser();
  const { courses, isLoading } = useCourses();
  const { removeCourse } = useRemoveCourse();
  const navigate = useNavigate();
  const { resetCourseProgress } = useResetCourseProgress();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const closeModal = useCallback(() => setSelectedCourseId(null), []);

  if (!user) return null;

  const name = user.email.split('@')[0];
  const myCourses = courses.filter((course) => user.selectedCourses.includes(course._id));

  const handleStart = async (courseId: string, progress: number) => {
    if (progress === 100) await resetCourseProgress(courseId);
    setSelectedCourseId(courseId);
  };

  return (
    <div className={styles.page}>
      <section>
        <h1 className={styles.heading}>Профиль</h1>
        <div className={styles.profileCard}>
          <div className={styles.avatar} />
          <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p className={styles.login}>Логин: {user.email}</p>
            <Button
              variant="secondary"
              className={styles.logoutBtn}
              onClick={() => {
                logout();
                navigate(ROUTES.MAIN);
              }}
            >
              Выйти
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.heading}>Мои курсы</h2>

        {isLoading && <p>Загрузка...</p>}
        {!isLoading && myCourses.length === 0 && <p>Вы пока не добавили ни одного курса</p>}

        <div className={styles.cards}>
          {myCourses.map((course) => {
            const progress = getCourseProgressPercent(user, course._id, course.workouts.length);

            return (
              <CourseCard
                key={course._id}
                course={course}
                action={<RemoveCourseButton onClick={() => removeCourse(course._id)} />}
                footer={
                  <>
                    <p className={styles.progressLabel}>Прогресс {progress}%</p>
                    <ProgressBar value={progress} />
                    <Button
                      className={styles.cardBtn}
                      onClick={() => handleStart(course._id, progress)}
                    >
                      {getButtonText(progress)}
                    </Button>
                  </>
                }
              />
            );
          })}
          {selectedCourseId && (
            <SelectWorkoutModal courseId={selectedCourseId} onClose={closeModal} />
          )}
        </div>
      </section>
    </div>
  );
};
