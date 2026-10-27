import { CourseCard, useCourses } from '@/entities/course';
import { Button } from '@/shared/ui/Button';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const { courses, isLoading, error } = useCourses();

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
          <CourseCard key={course._id} course={course} />
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