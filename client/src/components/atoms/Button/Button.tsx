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
}

const Button: React.SFC<IButtonProps> = ({
  children,
  className,
  onClick,
  primary,
  small,
  to,
}) => {
  const Element = to ? StyledLink : StyledButton;
  const elementProps = to ? { to } : { onClick };

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
};

export { Button };
