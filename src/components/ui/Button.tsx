import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonClassName, type ButtonVariant } from './buttonClassName';

type CommonProps = {
  children: ReactNode;
  /** primary = crimson fill, secondary = outlined, inverse = white fill on crimson bands. */
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Renders an <a> when given an href (navigation) and a <button> otherwise (actions),
 * so the element always matches its semantics.
 */
function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, variant, className, children } = props;
    return (
      <a href={href} className={buttonClassName(variant, className)}>
        {children}
      </a>
    );
  }

  const { variant, className, children, type = 'button', ...rest } = props;
  return (
    <button type={type} className={buttonClassName(variant, className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
