import { shallow } from 'enzyme';
import * as React from 'react';

import { Loader } from './Loader';
import { Loader as StyledLoader } from './Loader.styled';

const getComponent = (customProps = {}) => {
  const jsx = (
    <Loader {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is StyledLoader', () => {
  const component = getComponent();

  expect(component.is(StyledLoader)).toBeTruthy();
});

it('sets className when provided', () => {
  const component = getComponent({ className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});
