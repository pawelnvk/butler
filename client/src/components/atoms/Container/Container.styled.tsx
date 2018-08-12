import styled from 'styled-components';

import { toPx } from 'src/styles/mixins';
import { containerWidth } from 'src/styles/variables';

export const StyledContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: ${toPx(containerWidth)};
`;
