import styled from 'styled-components';

import { fixed } from 'src/styles/mixins';
import { borderColor } from 'src/styles/variables';

export const StyledHeader = styled.header`
  ${fixed({ top: 0, right: 0, left: 0 })}

  border-bottom: 1px solid ${borderColor};
`;
