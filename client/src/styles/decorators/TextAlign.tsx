import styled from 'styled-components';

import { Decorator } from './Decorator';

interface ITextAlignProps {
  align?: string;
}

export const TextAlign = styled(Decorator)`
  ${(props: ITextAlignProps) => props.align ? `text-align: ${props.align}` : ''}
`;
