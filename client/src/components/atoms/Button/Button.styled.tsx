import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { gutter, toPx } from 'src/styles/mixins';
import { fontButton, primaryColor, whiteColor } from 'src/styles/variables';

interface IButtonProps {
  primary?: boolean;
  small?: boolean;
}

// RouterLink cannot be extension of Button.
// Due to prop types differences it is styled with help of mixin.
const buttonMixin = (props: IButtonProps) => css`
  background-color: ${props.primary ? primaryColor : whiteColor};
  border: 1px solid ${primaryColor};
  color: ${props.primary ? whiteColor : primaryColor};
  cursor: pointer;
  font: ${fontButton};
  letter-spacing: 0.13em;
  padding: ${toPx(gutter(props.small ? 0.5 : 1))} ${toPx(gutter(props.small ? 1 : 2))};
  text-transform: uppercase;
  user-select: none;
`;

export const Button = styled.button`
  ${(props: IButtonProps) => buttonMixin(props)}
`;

export const Link = styled(RouterLink)`
  ${(props: IButtonProps) => buttonMixin(props)}
`;
