import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'ghost';

export function buttonClassName(variant: ButtonVariant = 'primary', className?: string): string {
  return [styles.button, styles[variant], className].filter(Boolean).join(' ');
}
