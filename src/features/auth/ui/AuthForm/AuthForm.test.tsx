import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserContext } from '@/entities/user/model/userContext';
import { AuthForm } from './AuthForm';

const renderForm = (mode: 'login' | 'register') =>
  render(
    <UserContext.Provider
      value={{
        user: null,
        isLoading: false,
        setSession: jest.fn(async () => {}),
        refreshUser: jest.fn(async () => {}),
        logout: jest.fn(),
      }}
    >
      <AuthForm mode={mode} onSwitchMode={jest.fn()} onSuccess={jest.fn()} />
    </UserContext.Provider>,
  );

describe('AuthForm', () => {
  it('показывает ошибку, если поля пустые', async () => {
    renderForm('login');

    await userEvent.click(screen.getByRole('button', { name: 'Войти' }));

    expect(screen.getByText('Заполните все поля')).toBeInTheDocument();
  });

  it('показывает ошибку, если пароли не совпадают', async () => {
    renderForm('register');

    await userEvent.type(screen.getByPlaceholderText('Эл. почта'), 'test@mail.ru');
    await userEvent.type(screen.getByPlaceholderText('Пароль'), 'Secure@!1');
    await userEvent.type(screen.getByPlaceholderText('Повторите пароль'), 'Other@!1');
    await userEvent.click(screen.getByRole('button', { name: 'Зарегистрироваться' }));

    expect(screen.getByText('Пароли не совпадают')).toBeInTheDocument();
  });
});
