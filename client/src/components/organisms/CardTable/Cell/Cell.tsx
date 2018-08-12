import * as React from 'react';

import { Cell as StyledCell } from './Cell.styled';

interface ICellProps {
  children?: React.ReactNode;
  className?: string;
}

const Cell: React.SFC<ICellProps> = ({ children, className }) => {
  return <StyledCell className={className}>{children}</StyledCell>;
};

Cell.defaultProps = {
  children: null,
  className: '',
};

export { Cell };
