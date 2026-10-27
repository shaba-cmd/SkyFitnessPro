import { useCallback, useState, type ReactNode } from 'react';
import { Modal } from '@/shared/ui/index';
import { AuthForm } from '../ui/AuthForm/AuthForm';
import { AuthModalContext } from './authModalContext';

export const AuthModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const openAuthModal = useCallback(() => {
    setMode('login');
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AuthModalContext.Provider value={{ openAuthModal }}>
      {children}
      {isOpen && (
        <Modal onClose={close}>
          <AuthForm
            key={mode}
            mode={mode}
            onSwitchMode={() => setMode(mode === 'login' ? 'register' : 'login')}
            onSuccess={close}
          />
        </Modal>
      )}
    </AuthModalContext.Provider>
  );
};
