import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  absolute,
  gutter,
  relative,
  toPx,
} from 'src/styles/mixins';
import {
  baseColor,
  navItemFontSize,
  navItemFontWeight,
  navItemLineHeight,
  secondaryColor,
} from 'src/styles/variables';

const offstet = toPx(gutter(1.5));

export const Link = styled(RouterLink)`
  ${relative()}

  color: ${baseColor};
  display: inline-block;
  font-size: ${toPx(navItemFontSize)};
  font-weight: ${navItemFontWeight};
  letter-spacing: 0.06em;
  line-height: ${toPx(navItemLineHeight)};
  padding: ${offstet};
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    ${absolute({ right: offstet, bottom: 0, left: offstet })}

    content: '';
    background-color: ${secondaryColor};
    height: 6px;
    opacity: 0;
  }

  &:hover,
  &.active {
    &::after {
      opacity: 1;
    }
  }
`;
