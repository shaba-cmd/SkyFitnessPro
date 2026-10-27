import minusIcon from '@/shared/assets/icons/minus.svg';
import styles from './RemoveCourseButton.module.css';

export const RemoveCourseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    className={styles.button}
    onClick={onClick}
    title="Удалить курс"
    aria-label="Удалить курс"
  >
    <img src={minusIcon} alt="" />
  </button>
);
