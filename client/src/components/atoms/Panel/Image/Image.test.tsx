import { shallow } from 'enzyme';
import * as React from 'react';

import { Img } from 'src/components/atoms/Img';
import { Block } from 'src/styles/decorators/Block';
import { ObjectFit } from 'src/styles/decorators/ObjectFit';
import { Size } from 'src/styles/decorators/Size';

import { Image } from './Image';
import { Wrapper } from './Image.styled';

const getComponent = (customProps = {}) => {
  const props = {
    src: 'path/to/img',
  };
  const jsx = (
    <Image {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is div', () => {
  const component = getComponent();

  expect(component.is(Wrapper)).toBeTruthy();
});

it('returns null if no src provided', () => {
  const component = getComponent({ src: undefined });

  expect(component.children().length).toEqual(0);
});

it('contains Img', () => {
  const component = getComponent();

  expect(component.find(Img).length).toEqual(1);
});

it('passes src to Img', () => {
  const src = 'path/to/img';

  const component = getComponent({ src });

  expect(component.find(Img).prop('src')).toEqual(src);
});

it('passes alt to Img', () => {
  const alt = 'alt';

  const component = getComponent({ alt });

  expect(component.find(Img).prop('alt')).toEqual(alt);
});

it('contains Block', () => {
  const component = getComponent();

  expect(component.find(Block).length).toEqual(1);
});

it('contains ObjectFit', () => {
  const component = getComponent();

  expect(component.find(ObjectFit).length).toEqual(1);
});

it('leaves value prop on ObjectFit as empty by default', () => {
  const value = '';

  const component = getComponent();

  expect(component.find(ObjectFit).prop('value')).toEqual(value);
});

it('sets width prop to ObjectFit if fixed prop provided', () => {
  const value = 'cover';

  const component = getComponent({ fixed: true });

  expect(component.find(ObjectFit).prop('value')).toEqual(value);
});

it('contains Size', () => {
  const component = getComponent();

  expect(component.find(Size).length).toEqual(1);
});

it('leaves height prop on Size as empty by default', () => {
  const height = '';

  const component = getComponent();

  expect(component.find(Size).prop('height')).toEqual(height);
});

it('sets width prop to Size by default', () => {
  const width = '100%';

  const component = getComponent();

  expect(component.find(Size).prop('width')).toEqual(width);
});

it('sets width prop to Size if fixed prop providedt', () => {
  const height = '250px';

  const component = getComponent({ fixed: true });

  expect(component.find(Size).prop('height')).toEqual(height);
});
