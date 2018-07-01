import * as React from 'react';

import { Loader as StyledLoader } from './Loader.styled';

interface ILoaderProps {
  className?: string;
}

const Loader: React.SFC<ILoaderProps> = ({ className }) => {
  return (
    <StyledLoader className={className} />
  );
};

Loader.defaultProps = {
  className: '',
};

export { Loader };
