import styles from './CourseCard.module.css';
import Yoga from '@/shared/assets/courses/Yoga.jpg';
import calendarIcon from '@/shared/assets/icons/calendar.svg';
import timeIcon from '@/shared/assets/icons/time.svg';
import difficultyIcon from '@/shared/assets/icons/difficulty.svg';

export const CourseCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={Yoga} alt="Yoga" />
      </div>
      <div className={styles.box}>
        <p className={styles.title}>Йога</p>
        <div className={styles.infoBox}>
          <span className={styles.info}>
            <img src={calendarIcon} alt="" />
            <p>25 дней</p>
          </span>
          <span className={styles.info}>
            <img src={timeIcon} alt="" />
            <p> 25-50 мин/день</p>
          </span>
          <span className={styles.info}>
            <img src={difficultyIcon} alt="" />
            <p>Сложность</p>
          </span>
        </div>
      </div>
    </article>
  );
};
