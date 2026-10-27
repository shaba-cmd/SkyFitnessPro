import { CourseCard, useCourses } from '@/entities/course';
import { Button } from '@/shared/ui';
import styles from './MainPage.module.css';
import { useUser } from '@/entities/user';
import { useAuthModal } from '@/features/auth';
import { AddCourseButton, useAddCourse } from '@/features/add-course';

export const MainPage = () => {
  const { courses, isLoading, error } = useCourses();
  const { user } = useUser();
  const { openAuthModal } = useAuthModal();
  const { addCourse, isAdded } = useAddCourse();

  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <h1 className={styles.title}>Начните заниматься спортом и улучшите качество жизни</h1>
        <div className={styles.bubble}>Измени своё тело за полгода!</div>
      </div>

      {isLoading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}

      <div className={styles.cards}>
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            action={
              !isAdded(course._id) && (
                <AddCourseButton onClick={() => (user ? addCourse(course._id) : openAuthModal())} />
              )
            }
          />
        ))}
      </div>

      <Button
        className={styles.btn}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Наверх ↑
      </Button>
    </section>
  );
};
