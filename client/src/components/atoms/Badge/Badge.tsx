import * as React from 'react';

import { COLOR_DEFAULT, T_COLOR } from './Badge.constants';
import { Badge as StyledBadge } from './Badge.styled';

interface IBadgeProps {
  children?: React.ReactNode;
  className?: string;
  color?: T_COLOR;
  onClick?: () => void;
}

const Badge: React.SFC<IBadgeProps> = ({ children, className, color, onClick }) => {
  return (
    <StyledBadge
      className={className}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  children: null,
  className: '',
  color: COLOR_DEFAULT,
  onClick: undefined,
};

export { Badge };
