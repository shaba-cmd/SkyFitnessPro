import { useState } from 'react';
import { useUser } from '@/entities/user';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import logo from '@/shared/assets/logo.svg';
import { loginRequest, registerRequest } from '../../api/authApi';
import styles from './AuthForm.module.css';

type Props = {
  mode: 'login' | 'register';
  onSwitchMode: () => void;
  onSuccess: () => void;
};

export const AuthForm = ({ mode, onSwitchMode, onSuccess }: Props) => {
  const { setSession } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isRegister = mode === 'register';

  const submit = async () => {
    setError('');
    if (!email || !password || (isRegister && !repeatPassword)) {
      setError('Заполните все поля');
      return;
    }
    if (isRegister && password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setIsLoading(true);
    try {
      if (isRegister) await registerRequest(email, password);
      const { token } = await loginRequest(email, password);
      await setSession(token);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Что-то пошло не так');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      <img className={styles.logo} src={logo} alt="SkyFitnessPro" />

      <div className={styles.fields}>
        <Input
          type="email"
          placeholder={isRegister ? 'Эл. почта' : 'Логин'}
          autoComplete="email"
          value={email}
          error={Boolean(error)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Пароль"
          autoComplete={isRegister ? 'new-password' : 'current-password'}
          value={password}
          error={Boolean(error)}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister && (
          <Input
            type="password"
            placeholder="Повторите пароль"
            autoComplete="new-password"
            value={repeatPassword}
            error={Boolean(error)}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        )}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttons}>
        <Button type="submit" className={styles.btn} disabled={isLoading}>
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </Button>
        <Button variant="secondary" className={styles.btn} onClick={onSwitchMode}>
          {isRegister ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </div>
    </form>
  );
};
