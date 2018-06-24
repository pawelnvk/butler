import * as React from 'react';

import * as Headings from './Heading.styled';

interface IHeadingProps {
  children?: React.ReactNode,
  className?: string,
  priority?: number,
};

const Heading: React.SFC<IHeadingProps> = ({ className, children, priority }) => {
  const Element = Headings[`Heading${priority}`];

  return (
    <Element className={className}>{children}</Element>
  );
};

Heading.defaultProps = {
  children: null,
  className: '',
  priority: 1,
};

export { Heading };
