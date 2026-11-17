import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from '../../router/Link';
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
 * Renders a link when given an href (navigation) and a <button> otherwise (actions),
 * so the element always matches its semantics. Links go through the router <Link>.
 */
function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, variant, className, children } = props;
    return (
      <Link href={href} className={buttonClassName(variant, className)}>
        {children}
      </Link>
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
