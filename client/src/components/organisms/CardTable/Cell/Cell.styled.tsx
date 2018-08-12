import styled from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';
import { whiteColor } from 'src/styles/variables';

export const Cell = styled.td`
  background-color: ${whiteColor};
  padding: ${toPx(gutter(1.5))};
`;
