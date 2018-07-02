import styled from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';
import { borderColor } from 'src/styles/variables';

export const Wrapper = styled.div`
  padding: ${toPx(gutter(2))};
  margin: -1px;
  border: 1px solid ${borderColor};
`;
