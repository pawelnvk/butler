import { shallow } from 'enzyme';
import * as React from 'react';

import { Heading } from './Heading';
import { Heading1, Heading2 } from './Heading.styled';

const getComponent = (customProps = {}) => {
  const jsx = (
    <Heading
      {...customProps}
    />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('displays passed content', () => {
  const component = getComponent({ children: 'Example' });

  expect(component.contains('Example')).toBeTruthy();
});

it('contains by default heading tag', () => {
  const component = getComponent({ children: 'Example' });

  expect(component.is(Heading1)).toBeTruthy();
});

it('changes heading tag when provided', () => {
  const component = getComponent({ children: 'Example', priority: 2 });

  expect(component.is(Heading2)).toBeTruthy();
});

it('sets className when provided', () => {
  const component = getComponent({ children: 'Example', className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});
