import styled from 'styled-components';

import { fontText, textColor } from 'src/styles/variables';

export const Paragraph = styled.p`
  color: ${textColor};
  font: ${fontText};
  letter-spacing: 0.03em;
  margin: 0;
`;

export const Span = Paragraph.withComponent('span');
