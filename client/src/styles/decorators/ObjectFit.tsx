import styled from 'styled-components';

import { Decorator } from './Decorator';

interface IObjectFitProps {
  value?: string;
}

export const ObjectFit = styled(Decorator)`
  ${(props: IObjectFitProps) => props.value ? `object-fit: ${props.value}` : ''}
`;
