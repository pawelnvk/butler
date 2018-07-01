import styled from 'styled-components';

import {
  fontHeading1,
  fontHeading2,
  fontHeading3,
  fontHeading4,
  fontHeading5,
  fontHeading6,
} from 'src/styles/variables';

const Heading = styled.span`
  margin: 0;
`;

export const Heading1 = Heading.withComponent('h1').extend`
  font: ${fontHeading1};
`;

export const Heading2 = Heading.withComponent('h2').extend`
  font: ${fontHeading2};
`;

export const Heading3 = Heading.withComponent('h3').extend`
  font: ${fontHeading3};
`;

export const Heading4 = Heading.withComponent('h4').extend`
  font: ${fontHeading4};
`;

export const Heading5 = Heading.withComponent('h5').extend`
  font: ${fontHeading5};
`;

export const Heading6 = Heading.withComponent('h6').extend`
  font: ${fontHeading6};
`;
