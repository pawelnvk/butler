import styled, { keyframes } from 'styled-components';

import { absolute, relative, size, toPx } from 'src/styles/mixins';
import { lightGrayColor, primaryColor } from 'src/styles/variables';

const loaderWidth = 8;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  ${relative()}
  ${size({ height: toPx(50), width: toPx(50) })}

  border: ${toPx(loaderWidth)} solid ${lightGrayColor};
  border-radius: 50%;
  display: inline-block;

  &:before {
    ${absolute({
      bottom: toPx(-loaderWidth),
      left: toPx(-loaderWidth),
      right: toPx(-loaderWidth),
      top: toPx(-loaderWidth),
    })}

    animation: ${rotate360} 1.5s linear infinite;
    border: ${toPx(loaderWidth)} solid;
    border-color: ${primaryColor} transparent transparent;
    border-radius: 50%;
    content: '';
  }
`;
