import { CourseCard } from '@/entities/course';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <h1 className={styles.title}>Начните заниматься спортом и улучшите качество жизни</h1>
        <div className={styles.bubble}>Измени своё тело за полгода!</div>
      </div>
      <div className={styles.cards}>
        <CourseCard />
      </div>
    </section>
  );
};
