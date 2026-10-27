import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { getToken, removeToken, setToken } from '@/shared/api';
import { getMe } from '../api/userApi';
import { UserContext } from './userContext';
import type { User } from './types';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(() => Boolean(getToken()));

  const refreshUser = useCallback(async () => {
    try {
      setUser(await getMe());
    } catch {
      removeToken();
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (!getToken()) return;

    getMe()
      .then(setUser)
      .catch(() => removeToken())
      .finally(() => setIsLoading(false));
  }, []);

  const setSession = async (token: string) => {
    setToken(token);
    await refreshUser();
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, setSession, refreshUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
