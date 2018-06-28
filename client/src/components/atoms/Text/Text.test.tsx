import { shallow } from 'enzyme';
import * as React from 'react';

import { Text } from './Text';
import { Paragraph, Span } from './Text.styled';

const getComponent = (customProps = {}) => {
  const jsx = (
    <Text {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is paragraph by default', () => {
  const component = getComponent();

  expect(component.is(Paragraph)).toBeTruthy();
});

it('is span when inline prop is true', () => {
  const component = getComponent({ inline: true });

  expect(component.is(Span)).toBeTruthy();
});

it('displays passed content', () => {
  const component = getComponent({ children: 'Example' });

  expect(component.contains('Example')).toBeTruthy();
});

it('sets className when provided', () => {
  const component = getComponent({ children: 'Example', className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});


