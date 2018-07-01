import styled from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';
import { baseColor, fontTable } from 'src/styles/variables';

export const Cell = styled.td`
  border: 1px solid ${baseColor};
  color: ${baseColor};
  font: ${fontTable};
  padding: ${toPx(gutter(0.25))};
`;
