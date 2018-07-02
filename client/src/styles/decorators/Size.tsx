import styled from 'styled-components';

import { Decorator } from './Decorator';

interface ISizeProps {
  height?: string;
  width?: string;
}

export const Size = styled(Decorator)`
  ${(props: ISizeProps) => props.height ? `height: ${props.height}` : ''}
  ${(props: ISizeProps) => props.width ? `width: ${props.width}` : ''}
`;
