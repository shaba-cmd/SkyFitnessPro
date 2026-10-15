import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout';
import { MainPage } from '@/pages/main';
import { ROUTES } from '@/shared/config/routes';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: ROUTES.MAIN, element: <MainPage /> }],
  },
]);
