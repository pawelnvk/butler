import styled from 'styled-components';

import { Decorator } from './Decorator';

interface IPaddingProps {
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
}

export const Padding = styled(Decorator)`
  ${({ top }: IPaddingProps) => top ? `padding-top: ${top}` : ''}
  ${({ right }: IPaddingProps) => right ? `padding-right: ${right}` : ''}
  ${({ bottom }: IPaddingProps) => bottom ? `padding-bottom: ${bottom}` : ''}
  ${({ left }: IPaddingProps) => left ? `padding-left: ${left}` : ''}
`;
