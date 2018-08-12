import * as React from 'react';

import { Heading as TextHeading } from 'src/components/atoms/Heading';

import { HeadingCell } from './Heading.styled';

interface IHeadingProps {
  names: string[];
}

const Heading: React.SFC<IHeadingProps> = ({ names }) => {

  return (
    <tr>
      {names.map(name => (
        <HeadingCell key={name}>
          <TextHeading priority={6}>{name}</TextHeading>
        </HeadingCell>
      ))}
    </tr>
  );
};

export { Heading };
