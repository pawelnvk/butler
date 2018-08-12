import * as React from 'react';

import { CardTable as StyledCardTable } from './CardTable.styled';
import { Heading } from './Heading';
import { Row } from './Row';

interface ICardTableProps {
  children?: React.ReactNode;
  className?: string;
}

const CardTable: React.SFC<ICardTableProps> = ({ children, className }) => {
  const rows: React.ReactNode[] = [];
  const heading: React.ReactNode = React.Children.toArray(children)
    .find((child: React.ReactElement<any>) => child.type === Heading);

  React.Children.forEach(children, (child: React.ReactElement<any>) => {
    if (child.type === Row) {
      rows.push(child);
    }
  });

  return (
    <StyledCardTable className={className}>
      {heading && <thead>{heading}</thead>}
      <tbody>
        {rows}
      </tbody>
    </StyledCardTable>
  );
};

CardTable.defaultProps = {
  children: null,
  className: '',
};

export { CardTable };
