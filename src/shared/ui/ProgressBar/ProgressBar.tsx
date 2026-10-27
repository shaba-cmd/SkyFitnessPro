import styles from './ProgressBar.module.css';

export const ProgressBar = ({ value }: { value: number }) => (
  <div className={styles.track}>
    <div className={styles.fill} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
  </div>
);
