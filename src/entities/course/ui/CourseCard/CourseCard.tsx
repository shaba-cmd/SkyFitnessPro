import type { ReactNode } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import calendarIcon from '@/shared/assets/icons/calendar.svg';
import timeIcon from '@/shared/assets/icons/time.svg';
import difficultyIcon from '@/shared/assets/icons/difficulty.svg';
import type { Course } from '../../model/types';
import { getCourseImage } from '../../lib/courseImage';
import styles from './CourseCard.module.css';

type Props = {
  course: Course;
  action?: ReactNode;
};

export const CourseCard = ({ course, action }: Props) => {
  return (
    <article className={styles.card}>
      <Link to={generatePath(ROUTES.COURSE, { courseId: course._id })} className={styles.link}>
        <img className={styles.img} src={getCourseImage(course.nameEN)} alt={course.nameRU} />
        <div className={styles.box}>
          <h3 className={styles.title}>{course.nameRU}</h3>
          <div className={styles.infoBox}>
            <div className={styles.info}>
              <img src={calendarIcon} alt="" />
              <span>{course.durationInDays} дней</span>
            </div>
            <div className={styles.info}>
              <img src={timeIcon} alt="" />
              <span>
                {course.dailyDurationInMinutes.from}-{course.dailyDurationInMinutes.to} мин/день
              </span>
            </div>
            <div className={styles.info}>
              <img src={difficultyIcon} alt="" />
              <span>Сложность</span>
            </div>
          </div>
        </div>
      </Link>
      {action && <div className={styles.action}>{action}</div>}
    </article>
  );
};