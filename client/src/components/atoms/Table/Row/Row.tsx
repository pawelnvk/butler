import * as React from 'react';

import { Cell } from '../Cell';

interface IRowProps {
  children: React.ReactNode,
}

const Row: React.SFC<IRowProps> = ({ children }) => {
  const cells: React.ReactNode[] = [];

  React.Children.forEach(children, (child: React.ReactElement<any>) => {
    if (child.type === Cell) {
      cells.push(child);
    }
  });

  return <tr>{cells}</tr>;
};

export { Row };
