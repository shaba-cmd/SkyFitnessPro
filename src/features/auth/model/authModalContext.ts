import { createContext, useContext } from 'react';

export const AuthModalContext = createContext<{ openAuthModal: () => void } | null>(null);

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) throw new Error('useAuthModal должен использоваться внутри AuthModalProvider');
  return context;
};