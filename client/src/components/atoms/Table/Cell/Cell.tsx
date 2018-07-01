import * as React from 'react';

import { Cell as StyledCell } from './Cell.styled';

interface ICellProps {
  children?: React.ReactNode;
}

const Cell: React.SFC<ICellProps> = ({ children }) => {
  return <StyledCell>{children}</StyledCell>;
};

Cell.defaultProps = {
  children: null,
};

export { Cell };
