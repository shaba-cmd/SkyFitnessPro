import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('рендерит текст и вызывает onClick', async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Войти</Button>);

    await userEvent.click(screen.getByRole('button', { name: 'Войти' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('по умолчанию имеет type="button"', () => {
    render(<Button>Войти</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('не вызывает onClick, когда disabled', async () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Войти
      </Button>,
    );

    await userEvent.click(screen.getByRole('button'));

    expect(onClick).not.toHaveBeenCalled();
  });
});
