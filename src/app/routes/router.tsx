import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { ROUTES } from '@/shared/config/routes';

export const router = createBrowserRouter([{ path: ROUTES.MAIN, element: <MainPage /> }]);
