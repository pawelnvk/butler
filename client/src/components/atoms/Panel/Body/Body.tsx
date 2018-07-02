import * as React from 'react';

import { Wrapper } from './Body.styled';

interface IBodyProps {
  children?: React.ReactNode;
}

const Body: React.SFC<IBodyProps> = ({ children }) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

Body.defaultProps = {
  children: null,
};

export { Body };
