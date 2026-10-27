import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout';
import { MainPage } from '@/pages/main';
import { ROUTES } from '@/shared/config/routes';
import { CoursePage } from '@/pages/course';
import { ProfilePage } from '@/pages/profile';
import { ProtectedRoute } from './ProtectedRoute';
import { WorkoutPage } from '@/pages/workout';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <p style={{ padding: 40 }}>Что-то пошло не так. Обновите страницу.</p>,
    children: [
      { path: ROUTES.MAIN, element: <MainPage /> },
      { path: ROUTES.COURSE, element: <CoursePage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: ROUTES.PROFILE, element: <ProfilePage /> },
          { path: ROUTES.WORKOUT, element: <WorkoutPage /> },
        ],
      },
    ],
  },
]);
