import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'ghost';

/**
 * Class list for a button variant. Shared by <Button> and by router links styled as buttons,
 * so every button-looking element has one source of styling.
 */
export function buttonClassName(variant: ButtonVariant = 'primary', className?: string): string {
  return [styles.button, styles[variant], className].filter(Boolean).join(' ');
}
