import * as React from 'react';

import { Icon, LOGO_ICON } from 'src/components/atoms/Icon';
import { getHomePagePath } from 'src/constants/paths';
import { Size } from 'src/styles/decorators/Size';

import { LogoLink, LogoText } from './Logo.styled';

const Logo: React.SFC = () => (
  <LogoLink to={getHomePagePath()}>
    <Size height="33px">
      <Icon alt="Butler" icon={LOGO_ICON} />
    </Size>

    <LogoText>Butler</LogoText>
  </LogoLink>
);

export { Logo };
