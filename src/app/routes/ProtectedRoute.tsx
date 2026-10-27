import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@/entities/user';
import { ROUTES } from '@/shared/config/routes';

export const ProtectedRoute = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return <p>Загрузка...</p>;
  if (!user) return <Navigate to={ROUTES.MAIN} replace />;

  return <Outlet />;
};
