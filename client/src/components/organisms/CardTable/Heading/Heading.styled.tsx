import styled from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';

export const HeadingCell = styled.th`
  padding: ${toPx(gutter(1.5))};
  white-space: nowrap;
`;
