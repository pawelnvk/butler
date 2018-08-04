import styled, { css } from 'styled-components';

import { gutter, size, toPx } from 'src/styles/mixins';
import { borderColor } from 'src/styles/variables';

const inputFieldMixin = css`
  border: 1px solid ${borderColor};
  padding: ${toPx(gutter(0.5))} ${toPx(gutter(1))};
`;

export const Textarea = styled.textarea`
  ${inputFieldMixin}

  resize: none;
  min-height: 150px;
`;

export const Input = styled.input`
  ${size({ height: toPx(33) })}
  ${inputFieldMixin}
`;
