import styled from 'styled-components';

import { absolute, gutter, relative, size, toPx } from 'src/styles/mixins';
import { fontText, textColor, textLineHeight, unorderedDiskSize } from 'src/styles/variables';

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const OrderedList = UnorderedList.withComponent('ol').extend`
  counter-reset: item;
`;

export const BaseListItem = styled.li``;

export const OrderedListItem = BaseListItem.extend`
  &:before {
    counter-increment: item;
    content: counter(item)".";
    color: ${textColor};
    font: ${fontText};
    padding-right: ${toPx(gutter(0.5))}
  }
`;

export const UnorderedListItem = BaseListItem.extend`
  ${relative()}

  padding-left: ${toPx(gutter(1.5))};

  &:before {
    ${absolute({ top: toPx((textLineHeight - unorderedDiskSize) / 2), left: '0' })}
    ${size({ height: toPx(unorderedDiskSize), width: toPx(unorderedDiskSize) })}

    content: '';
    background-color: ${textColor};
    border-radius: 50%;
  }
`;
