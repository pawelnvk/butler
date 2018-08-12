import * as React from 'react';
import {
  Button as StyledButton,
  Link as StyledLink,
} from './Button.styled';

interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
  small?: boolean;
  to?: string;
  type?: string;
}

const Button: React.SFC<IButtonProps> = ({
  children,
  className,
  onClick,
  primary,
  small,
  to,
  type,
}) => {
  const Element = to ? StyledLink : StyledButton;
  const elementProps = to ? { to } : { onClick, type };

  return (
    <Element
      className={className}
      primary={primary}
      small={small}
      {...elementProps}
    >
      {children}
    </Element>
  );
};

Button.defaultProps = {
  children: null,
  className: '',
  onClick: () => null,
  primary: false,
  small: false,
  to: '',
  type: 'button',
};

export { Button };
