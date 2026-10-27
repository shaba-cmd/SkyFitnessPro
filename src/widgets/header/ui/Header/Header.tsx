import { Button } from '@/shared/ui';
import styles from './Header.module.css';
import logo from '@/shared/assets/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { useUser } from '@/entities/user';
import { useAuthModal } from '@/features/auth';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header = () => {
  const { user } = useUser();
  const { openAuthModal } = useAuthModal();

  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Link to={ROUTES.MAIN}>
          <img className={styles.logo} src={logo} alt="SkyFitnessPro" />
        </Link>
        <p className={styles.text}>Онлайн-тренировки для занятий дома</p>
      </div>
      {user ? (
        <UserMenu />
      ) : (
        <Button className={styles.loginBtn} onClick={openAuthModal}>
          Войти
        </Button>
      )}
    </header>
  );
};
