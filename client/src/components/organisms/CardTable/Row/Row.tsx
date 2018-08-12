import * as React from 'react';

import { Row as StyledRow } from './Row.styled';

// @TODO filter out styled components and cells
// const isCellChild = (child: React.ReactElement<any>): boolean => {
//   const isDirectChildCell = child.type === Cell;
//   const isDirectChildStyledComponent = (
//     typeof child === 'function' && typeof child.styledComponentId === 'string'
//   );

//   if (isDirectChildCell) {
//     return true;
//   }
//   if (isDirectChildStyledComponent) {
//     return isCellChild(child.props.children);
//   }

//   return false;
// };

interface IRowProps {
  children: React.ReactNode;
}

const Row: React.SFC<IRowProps> = ({ children }) => {
  const cells: React.ReactNode[] = [];

  React.Children.forEach(children, (child: React.ReactElement<any>) => {
    cells.push(child);
  });

  return <StyledRow>{cells}</StyledRow>;
};

export { Row };
