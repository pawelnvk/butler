import styled from 'styled-components';

import { fontFamily, primaryColor } from 'src/styles/variables';

export const Heading = styled.h1`
  font-family: ${fontFamily};
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  margin: auto;
  max-width: 600px;
  padding: 0.5em;
  color: ${primaryColor};
`;
