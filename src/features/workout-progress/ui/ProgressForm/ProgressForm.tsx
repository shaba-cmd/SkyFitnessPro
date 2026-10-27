import { useState } from 'react';
import type { Exercise } from '@/entities/workout';
import { Button, Input } from '@/shared/ui';
import styles from './ProgressForm.module.css';

type Props = {
  exercises: Exercise[];
  initial: number[];
  onSubmit: (progressData: number[]) => Promise<void>;
};

export const ProgressForm = ({ exercises, initial, onSubmit }: Props) => {
  const [values, setValues] = useState(() => exercises.map((_, i) => String(initial[i] ?? 0)));
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsSaving(true);
    setError('');
    try {
      await onSubmit(values.map((value) => Math.max(0, Number(value) || 0)));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось сохранить прогресс');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit();
      }}
    >
      <h2 className={styles.title}>Мой прогресс</h2>

      <div className={styles.list}>
        {exercises.map((exercise, index) => (
          <label key={exercise._id} className={styles.field}>
            <span>Сколько раз вы сделали {exercise.name.toLowerCase()}?</span>
            <Input
              type="number"
              min={0}
              value={values[index]}
              onChange={(e) =>
                setValues((prev) => prev.map((v, i) => (i === index ? e.target.value : v)))
              }
            />
          </label>
        ))}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <Button type="submit" className={styles.btn} disabled={isSaving}>
        Сохранить
      </Button>
    </form>
  );
};
