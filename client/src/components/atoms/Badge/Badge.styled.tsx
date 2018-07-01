import styled, { css } from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';
import {
  badgeLineHeight,
  fontBadge,
  grayColor,
  primaryColor,
  whiteColor,
} from 'src/styles/variables';
import { COLOR_DEFAULT, COLOR_GRAY, T_COLOR } from './Badge.constants';

const color = (type?: T_COLOR) => {
  switch (type) {
    case COLOR_GRAY:
      return grayColor;
    case COLOR_DEFAULT:
      return primaryColor;
    default:
      return primaryColor;
  }
};

const clickable = css`
  cursor: pointer;
  user-select: none;
`;

interface IBadge {
  color?: T_COLOR;
}

export const Badge = styled.span`
  background-color: ${whiteColor};
  border: 1px solid ${(props: IBadge) => color(props.color)};
  border-radius: ${toPx((badgeLineHeight + 2 * gutter()) / 2)};
  color: ${(props: IBadge) => color(props.color)};
  font: ${fontBadge};
  letter-spacing: 0.06em;
  padding: ${toPx(gutter(0.25))} ${toPx(gutter())};
  text-transform: uppercase;
  ${props => props.onClick ? clickable : ''}
`;
