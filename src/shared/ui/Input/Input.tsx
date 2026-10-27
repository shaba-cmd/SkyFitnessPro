import type { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export const Input = ({ error, className, ...props }: InputProps) => (
  <input className={cn(styles.input, error && styles.error, className)} {...props} />
);
