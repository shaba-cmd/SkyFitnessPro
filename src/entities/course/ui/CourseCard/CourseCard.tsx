import styles from './CourseCard.module.css';
import calendarIcon from '@/shared/assets/icons/calendar.svg';
import timeIcon from '@/shared/assets/icons/time.svg';
import difficultyIcon from '@/shared/assets/icons/difficulty.svg';
import plus from '@/shared/assets/icons/plus.svg';
import type { Course } from '@/entities/course';
import type { ReactNode } from 'react';
import { getCourseImage } from '@/entities/course/lib/courseImage';

type Props = {
  course: Course;
  action?: ReactNode;
};

export const CourseCard = ({ course }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={getCourseImage(course.nameEN)} alt={course.nameRU} />
        <div className={styles.action}>
          <img src={plus} alt="Добавить" />
        </div>
      </div>
      <div className={styles.box}>
        <p className={styles.title}>{course.nameRU}</p>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <img src={calendarIcon} alt="" />
            <p>{course.durationInDays} дней</p>
          </div>
          <div className={styles.info}>
            <img src={timeIcon} alt="" />
            <p>
              {course.dailyDurationInMinutes.from}-{course.dailyDurationInMinutes.to} мин/день
            </p>
          </div>
          <div className={styles.info}>
            <img src={difficultyIcon} alt="" />
            <p>Сложность</p>
          </div>
        </div>
      </div>
    </article>
  );
};
