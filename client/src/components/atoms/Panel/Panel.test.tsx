import { shallow } from 'enzyme';
import * as React from 'react';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Image } from './Image';
import { Panel } from './Panel';
import { Panel as StyledPanel } from './Panel.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <Panel {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is section', () => {
  const component = getComponent();

  expect(component.is(StyledPanel)).toBeTruthy();
});

it('sets className when provided', () => {
  const component = getComponent({ className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});

it('filters out random children', () => {
  const component = getComponent({ children: <div>Example</div> });

  expect(component.contains('Example')).toBeFalsy();
});

it('passes body as children', () => {
  const component = getComponent({ children: <Body>Example</Body> });

  expect(component.contains('Example')).toBeTruthy();
});

it('passes header as children', () => {
  const component = getComponent({ children: <Header>Example</Header> });

  expect(component.contains('Example')).toBeTruthy();
});

it('passes footer as children', () => {
  const component = getComponent({ children: <Footer>Example</Footer> });

  expect(component.contains('Example')).toBeTruthy();
});

it('passes image as children', () => {
  const component = getComponent({ children: <Image>Example</Image> });

  expect(component.contains('Example')).toBeTruthy();
});
