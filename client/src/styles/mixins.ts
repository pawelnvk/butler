import { baseGutter } from './variables';

export const gutter = (ratio: number = 1) => baseGutter * ratio;

export const toPx = (value: number) => `${value}px`;

interface IFont {
  family: string,
  lineHeight: number,
  size: number,
  weight: number,
}

export const font = ({ family, lineHeight, size: fontSize, weight }: IFont) => (
  `${weight} ${toPx(fontSize)}/${toPx(lineHeight)} ${family}`
);

interface IPositionCoordinates {
  bottom?: string,
  left?: string,
  right?: string,
  top?: string,
}

interface IPositionArguments extends IPositionCoordinates {
  position: string,
}

export const position = ({
  bottom,
  left,
  position: positionProperty,
  right,
  top,
}: IPositionArguments) => `
  position: ${positionProperty};
  ${top ? `top: ${top};` : ''}
  ${right ? `right: ${right};` : ''}
  ${bottom ? `bottom: ${bottom};` : ''}
  ${left ? `left: ${left};` : ''}
`;

export const absolute = (coordinates?: IPositionCoordinates) => position({ ...coordinates, position: 'absolute' });
export const fixed = (coordinates?: IPositionCoordinates) => position({ ...coordinates, position: 'fixed' });
export const relative = (coordinates?: IPositionCoordinates) => position({ ...coordinates, position: 'relative' });

interface ISize {
  height?: string,
  width?: string,
}

export const size = ({ height, width}: ISize) => `
  ${height ? `height: ${height};` : ''}
  ${width ? `width: ${width};` : ''}
`
