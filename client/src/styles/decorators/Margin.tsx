import styled from 'styled-components';

import { Decorator } from './Decorator';

interface IMarginProps {
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
}

export const Margin = styled(Decorator)`
  ${({ top }: IMarginProps) => top ? `margin-top: ${top}` : ''}
  ${({ right }: IMarginProps) => right ? `margin-right: ${right}` : ''}
  ${({ bottom }: IMarginProps) => bottom ? `margin-bottom: ${bottom}` : ''}
  ${({ left }: IMarginProps) => left ? `margin-left: ${left}` : ''}
`;
