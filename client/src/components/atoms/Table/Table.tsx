import * as React from 'react';

import { Row } from './Row';
import { Table as StyledTable } from './Table.styled';

interface ITableProps {
  children?: React.ReactNode,
  className?: string,
}

const Table: React.SFC<ITableProps> = ({ children, className }) => {
  const rows: React.ReactNode[] = [];

  React.Children.forEach(children, (child: React.ReactElement<any>) => {
    if (child.type === Row) {
      rows.push(child);
    }
  });

  return (
    <StyledTable className={className}>
      <tbody>
        {rows}
      </tbody>
    </StyledTable>
  );
};

Table.defaultProps = {
  children: null,
  className: '',
};

export { Table };
