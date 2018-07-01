import * as React from 'react';

import { ICONS_MAP, T_ICON } from './Icon.constants';

interface IIconProps {
  alt?: string;
  className?: string;
  icon: T_ICON;
}

const Icon: React.SFC<IIconProps> = ({ alt, className, icon }) => {
  const src = ICONS_MAP[icon];

  return (
    <img
      alt={alt}
      className={className}
      src={src}
    />
  );
};

Icon.defaultProps = {
  alt: '',
  className: '',
};

export { Icon };
