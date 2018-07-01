import styled from 'styled-components';

import {
  dangerColor,
  fontCaption,
  fontText,
  successColor,
  textColor,
} from 'src/styles/variables';
import { COLOR_DANGER, COLOR_DEFAULT, COLOR_SUCCESS, T_COLOR } from './Text.constants';

const color = (type?: T_COLOR) => {
  switch (type) {
    case COLOR_DANGER:
      return dangerColor;
    case COLOR_DEFAULT:
      return textColor;
    case COLOR_SUCCESS:
      return successColor;
    default:
      return textColor;
  }
};

interface IParagraphProps {
  color?: T_COLOR;
  small?: boolean;
}

export const Paragraph = styled.p`
  color: ${(props: IParagraphProps) => color(props.color)};
  font: ${(props: IParagraphProps) => props.small ? fontCaption : fontText};
  letter-spacing: 0.03em;
  margin: 0;
`;

export const Span = Paragraph.withComponent('span');
