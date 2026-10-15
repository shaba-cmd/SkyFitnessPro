import { Button } from '@/shared/ui/Button';
import styles from './Header.module.css';
import logo from '@/shared/assets/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_box}>
        <Link to={ROUTES.MAIN}>
          <img className={styles.header__logo} src={logo} alt="SkyFitnesPro" />
        </Link>
        <p className={styles.header__text}>Онлайн-тренировки для занятий дома</p>
      </div>
      <Button>Войти</Button>
    </header>
  );
};
