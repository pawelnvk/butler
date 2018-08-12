import * as React from 'react';

import { Link } from './NavItem.styled';

interface INavItemProps {
  children: React.ReactNode;
  to: string;
}

const NavItem: React.SFC<INavItemProps> = ({ children, to }) => {
  return (
    <Link to={to}>{children}</Link>
  );
};

export { NavItem };
