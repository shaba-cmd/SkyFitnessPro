import { Button } from '@/shared/ui/Button/Button';
import styles from './Header.module.css';
import logo from '@/shared/assets/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Link to={ROUTES.MAIN}>
          <img className={styles.logo} src={logo} alt="SkyFitnessPro" />
        </Link>
        <p className={styles.text}>Онлайн-тренировки для занятий дома</p>
      </div>
      <Button >Войти</Button>
    </header>
  );
};
