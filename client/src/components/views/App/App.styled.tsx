import styled from 'styled-components';

import { primaryColor } from 'src/contants/styles';

export const Heading = styled.h1`
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 0.5em;
  color: ${primaryColor};
`;
