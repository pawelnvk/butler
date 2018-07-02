import { shallow } from 'enzyme';
import * as React from 'react';

import { EMPTY_IMG, Img } from './Img';

const getComponent = (customProps = {}) => {
  const jsx = (
    <Img {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is wrapper', () => {
  const component = getComponent();

  expect(component.is('img')).toBeTruthy();
});

it('has alt set to empty img by default', () => {
  const component = getComponent();

  expect(component.prop('src')).toEqual(EMPTY_IMG);
});

it('sets src if provided', () => {
  const path = 'path/to/img';

  const component = getComponent({ src: path });

  expect(component.prop('src')).toEqual(path);
});

it('has alt set to empty string by default', () => {
  const component = getComponent();

  expect(component.prop('alt')).toEqual('');
});

it('sets alt if provided', () => {
  const alt = 'alt';

  const component = getComponent({ alt });

  expect(component.prop('alt')).toEqual(alt);
});

it('sets className when provided', () => {
  const component = getComponent({ className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});
