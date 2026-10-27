import { RouterProvider } from 'react-router-dom';
import { UserProvider } from '@/entities/user';
import { AuthModalProvider } from '@/features/auth';
import { router } from './routes/router';

export const App = () => (
  <UserProvider>
    <AuthModalProvider>
      <RouterProvider router={router} />
    </AuthModalProvider>
  </UserProvider>
);