// improper hoisting jest.mock is resulting in returning
// undefined instead of mocked values
// https://github.com/kulshekhar/ts-jest/issues/90
const mockBaseGutter = 12;
jest.mock('./variables', () => {
  return { baseGutter: mockBaseGutter };
});

import {
  absolute,
  fixed,
  font,
  gutter,
  position,
  relative,
  size,
  toPx,
} from './mixins';

describe('gutter', () => {
  it('returns baseGutter value by default', () => {
    const gutterValue = gutter();

    expect(gutterValue).toEqual(mockBaseGutter);
  });

  it('returns baseGutter multiplied by provided ration', () => {
    const gutterValue = gutter(0.5);

    expect(gutterValue).toEqual(mockBaseGutter * 0.5);
  });
});

describe('toPx', () => {
  it('parses numeric value to string', () => {
    const value = 10;
    const expected = `${value}px`;

    const parsedValue = toPx(value);

    expect(parsedValue).toEqual(expected);
  })
});

describe('font', () => {
  it('returns font property', () => {
    const expected = '500 12px/16px sans-serif';

    const fontValue = font({
      family: 'sans-serif',
      lineHeight: 16,
      size: 12,
      weight: 500,
    });

    expect(fontValue).toEqual(expected);
  })
});

describe('position', () => {
  it('returns position string', () => {
    const expectedPosition = 'position: absolute';
    const expectedTop = 'top: 20px';
    const expectedRight = 'right: 20px';
    const expectedBottom = 'bottom: 20px';
    const expectedLeft = 'left: 20px';

    const positionString = position({
      bottom: '20px',
      left: '20px',
      position: 'absolute',
      right: '20px',
      top: '20px',
    });

    expect(positionString).toContain(expectedPosition);
    expect(positionString).toContain(expectedTop);
    expect(positionString).toContain(expectedRight);
    expect(positionString).toContain(expectedBottom);
    expect(positionString).toContain(expectedLeft);
  });

  it('omits top if no value provided', () => {
    const notExpected = 'top';

    const positionString = position({
      position: 'absolute',
    });

    expect(positionString).not.toContain(notExpected);
  });

  it('omits right if no value provided', () => {
    const notExpected = 'right';

    const positionString = position({
      position: 'absolute',
    });

    expect(positionString).not.toContain(notExpected);
  });

  it('omits bottom if no value provided', () => {
    const notExpected = 'bottom';

    const positionString = position({
      position: 'absolute',
    });

    expect(positionString).not.toContain(notExpected);
  });

  it('omits left if no value provided', () => {
    const notExpected = 'left';

    const positionString = position({
      position: 'absolute',
    });

    expect(positionString).not.toContain(notExpected);
  });
});

describe('absolute', () => {
  it('includes position property', () => {
    const expected = 'position: absolute';

    const positionString = absolute();

    expect(positionString).toContain(expected);
  });
});

describe('fixed', () => {
  it('includes position property', () => {
    const expected = 'position: fixed';

    const positionString = fixed();

    expect(positionString).toContain(expected);
  });
});

describe('relative', () => {
  it('includes position property', () => {
    const expected = 'position: relative';

    const positionString = relative();

    expect(positionString).toContain(expected);
  });
});

describe('size', () => {
  it('returns string containing height and width property if provided', () => {
    const expectedHeight = 'height: 200px';
    const expectedWidth = 'width: 200px';

    const sizeValue = size({ height: '200px', width: '200px' });

    expect(sizeValue).toContain(expectedHeight);
    expect(sizeValue).toContain(expectedWidth);
  })

  it('omits height if not provided', () => {
    const notExpectedHeight = 'height';

    const sizeValue = size({ width: '200px' });

    expect(sizeValue).not.toContain(notExpectedHeight);
  });

  it('omits width if not provided', () => {
    const notExpectedWidth = 'width';

    const sizeValue = size({ height: '200px' });

    expect(sizeValue).not.toContain(notExpectedWidth);
  });
});
