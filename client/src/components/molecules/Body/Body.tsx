import * as React from 'react';

import { Container } from 'src/components/atoms/Container';

import { StyledBody } from './Body.styled';

interface IBodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body: React.SFC<IBodyProps> = ({ children, className }) => {
  return (
    <StyledBody className={className}>
      <Container>{children}</Container>
    </StyledBody>
  );
};

Body.defaultProps = {
  className: '',
};

export { Body };
