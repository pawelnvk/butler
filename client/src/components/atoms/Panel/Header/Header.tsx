import * as React from 'react';

import { Wrapper } from './Header.styled';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header: React.SFC<IHeaderProps> = ({ children }) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

Header.defaultProps = {
  children: null,
};

export { Header };
