import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout';
import { MainPage } from '@/pages/main';
import { ROUTES } from '@/shared/config/routes';
import { CoursePage } from '@/pages/course';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <p style={{ padding: 40 }}>Что-то пошло не так. Обновите страницу.</p>,
    children: [
      { path: ROUTES.MAIN, element: <MainPage /> },
      { path: ROUTES.COURSE, element: <CoursePage /> },
    ],
  },
]);
