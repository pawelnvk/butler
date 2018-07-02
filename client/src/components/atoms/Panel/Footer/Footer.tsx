import * as React from 'react';

import { Wrapper } from './Footer.styled';

interface IFooterProps {
  children?: React.ReactNode;
}

const Footer: React.SFC<IFooterProps> = ({ children }) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

Footer.defaultProps = {
  children: null,
};

export { Footer };
