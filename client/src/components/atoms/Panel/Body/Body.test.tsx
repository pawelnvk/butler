import { shallow } from 'enzyme';
import * as React from 'react';

import { Body } from './Body';
import { Wrapper } from './Body.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <Body {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is wrapper', () => {
  const component = getComponent();

  expect(component.is(Wrapper)).toBeTruthy();
});

it('passes children', () => {
  const component = getComponent({ children: <div>Example</div> });

  expect(component.contains('Example')).toBeTruthy();
});
