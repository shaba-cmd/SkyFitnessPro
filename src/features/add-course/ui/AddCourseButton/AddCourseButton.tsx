import plusIcon from '@/shared/assets/icons/plus.svg';
import styles from './AddCourseButton.module.css';

export const AddCourseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    className={styles.button}
    onClick={onClick}
    title="Добавить курс"
    aria-label="Добавить курс"
  >
    <img src={plusIcon} alt="" />
  </button>
);