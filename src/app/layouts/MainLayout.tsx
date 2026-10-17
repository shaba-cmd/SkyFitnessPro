import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
