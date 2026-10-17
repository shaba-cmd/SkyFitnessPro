import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
  return (
    <button type="button" className={cn(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
