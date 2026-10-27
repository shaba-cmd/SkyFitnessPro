import { useParams } from 'react-router-dom';
import { getCourseVisual, useCourse } from '@/entities/course';
import { useUser } from '@/entities/user';
import { useAuthModal } from '@/features/auth';
import { useAddCourse } from '@/features/add-course';
import { Button } from '@/shared/ui';
import runner from '@/shared/assets/images/runner.png';
import styles from './CoursePage.module.css';

const BENEFITS = [
  'проработка всех групп мышц',
  'тренировка суставов',
  'улучшение циркуляции крови',
  'упражнения заряжают бодростью',
  'помогают противостоять стрессам',
];

export const CoursePage = () => {
  const { courseId = '' } = useParams();
  const { course, isLoading, error } = useCourse(courseId);
  const { user } = useUser();
  const { openAuthModal } = useAuthModal();
  const { addCourse, isAdded, isLoading: isAdding } = useAddCourse();

  if (isLoading) return <p>Загрузка...</p>;
  if (error || !course) return <p>{error ?? 'Курс не найден'}</p>;

  const { image, color } = getCourseVisual(course.nameEN);

  const added = isAdded(course._id);
  const buttonText = !user
    ? 'Войдите, чтобы добавить курс'
    : added
      ? 'Курс добавлен'
      : 'Добавить курс';

  return (
    <div className={styles.page}>
      <section className={styles.banner} style={{ backgroundColor: color }}>
        <h1 className={styles.bannerTitle}>{course.nameRU}</h1>
        <img className={styles.bannerImg} src={image} alt="" />
      </section>

      <section>
        <h2 className={styles.heading}>Подойдет для вас, если:</h2>
        <ul className={styles.fitting}>
          {course.fitting.map((text, index) => (
            <li key={text} className={styles.fittingItem}>
              <span className={styles.fittingNumber}>{index + 1}</span>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={styles.heading}>Направления</h2>
        <ul className={styles.directions}>
          {course.directions.map((direction) => (
            <li key={direction} className={styles.direction}>
              ✦ {direction}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Начните путь к новому телу</h2>
          <ul className={styles.benefits}>
            {BENEFITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button
            className={styles.ctaBtn}
            disabled={added || isAdding}
            onClick={() => (user ? addCourse(course._id) : openAuthModal())}
          >
            {buttonText}
          </Button>
        </div>
        <img className={styles.runner} src={runner} alt="" />
      </section>
    </div>
  );
};
