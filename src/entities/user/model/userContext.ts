import { createContext, useContext } from 'react';
import type { User } from './types';

type UserContextValue = {
  user: User | null;
  isLoading: boolean;
  setSession: (token: string) => Promise<void>;
  refreshUser: () => Promise<void>;
  logout: () => void;
};

export const UserContext = createContext<UserContextValue | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser должен использоваться внутри UserProvider');
  return context;
};