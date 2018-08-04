import * as isUndefined from 'lodash.isundefined';
import { css } from 'styled-components';

export const gutter = (ratio: number = 1) => 12 * ratio;

export const toPx = (value: number) => `${value}px`;

interface IFont {
  family: string;
  lineHeight: number;
  size: number;
  weight: number;
}

export const font = ({ family, lineHeight, size: fontSize, weight }: IFont) => (
  `${weight} ${toPx(fontSize)}/${toPx(lineHeight)} ${family}`
);

interface IPositionCoordinates {
  bottom?: string | 0;
  left?: string | 0;
  right?: string | 0;
  top?: string | 0;
}

interface IPositionArguments extends IPositionCoordinates {
  position: string;
}

export const position = ({
  bottom,
  left,
  position: positionProperty,
  right,
  top,
}: IPositionArguments) => css`
  position: ${positionProperty};
  ${isUndefined(top) ? '' : css`top: ${top};`}
  ${isUndefined(right) ? '' : css`right: ${right};`}
  ${isUndefined(bottom) ? '' : css`bottom: ${bottom};`}
  ${isUndefined(left) ? '' : css`left: ${left};`}
`;

export const absolute = (coordinates?: IPositionCoordinates) =>
  position({ ...coordinates, position: 'absolute' });
export const fixed = (coordinates?: IPositionCoordinates) =>
  position({ ...coordinates, position: 'fixed' });
export const relative = (coordinates?: IPositionCoordinates) =>
  position({ ...coordinates, position: 'relative' });

interface ISize {
  height?: string;
  width?: string;
}

export const size = ({ height, width }: ISize) => css`
  ${height ? css`height: ${height};` : ''}
  ${width ? css`width: ${width};` : ''}
`;
