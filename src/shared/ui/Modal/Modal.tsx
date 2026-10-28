import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import styles from './Modal.module.css';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Modal = ({ onClose, children, className }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const root = document.documentElement;
    const prevOverflow = root.style.overflow;

    document.addEventListener('keydown', handleKeyDown);
    root.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      root.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onMouseDown={onClose}>
      <div className={cn(styles.modal, className)} onMouseDown={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
