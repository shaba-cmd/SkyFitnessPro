import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useUser } from '@/entities/user';
import { Button } from '@/shared/ui/index';
import { ROUTES } from '@/shared/config/routes';
import profileIcon from '@/shared/assets/icons/profile.svg';
import arrowIcon from '@/shared/assets/icons/arrow-down.svg';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;
  if (!user?.email) return null;

  const name = user.email.split('@')[0];

  return (
    <div className={styles.menu}>
      <button type="button" className={styles.trigger} onClick={() => setIsOpen((v) => !v)}>
        <img src={profileIcon} alt="" />
        <span>{name}</span>
        <img src={arrowIcon} alt="" className={cn(styles.arrow, isOpen && styles.arrowOpen)} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <p className={styles.name}>{name}</p>
          <p className={styles.email}>{user.email}</p>
          <Button
            className={styles.btn}
            onClick={() => {
              setIsOpen(false);
              navigate(ROUTES.PROFILE);
            }}
          >
            Мой профиль
          </Button>
          <Button
            variant="secondary"
            className={styles.btn}
            onClick={() => {
              setIsOpen(false);
              logout();
              navigate(ROUTES.MAIN);
            }}
          >
            Выйти
          </Button>
        </div>
      )}
    </div>
  );
};
