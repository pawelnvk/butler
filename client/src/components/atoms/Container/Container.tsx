import * as React from 'react';

import { StyledContainer } from './Container.styled';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.SFC<IContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export { Container };
