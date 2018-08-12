import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';
import {
  baseColor,
  heading2FontSize,
} from 'src/styles/variables';

export const LogoLink = styled(Link)`
  align-items: center;
  color: initial;
  display: inline-flex;
  text-decoration: none;
`;

export const LogoText = styled.span`
  color: ${baseColor};
  font-size: ${toPx(heading2FontSize)};
  letter-spacing: 0.12em;
  margin-left: ${toPx(gutter())}
`;
