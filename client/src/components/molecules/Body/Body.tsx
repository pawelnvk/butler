import * as React from 'react';

import { Container } from 'src/components/atoms/Container';

import { StyledBody } from './Body.styled';

interface IBodyProps {
  children: React.ReactNode;
}

const Body: React.SFC<IBodyProps> = ({ children }) => {
  return (
    <StyledBody>
      <Container>{children}</Container>
    </StyledBody>
  );
};

export { Body };
