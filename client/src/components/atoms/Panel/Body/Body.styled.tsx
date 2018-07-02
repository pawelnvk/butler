import styled from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';
import { borderColor } from 'src/styles/variables';

export const Wrapper = styled.div`
  border: 1px solid ${borderColor};
  margin: -1px;
  padding: ${toPx(gutter(2))};
`;
