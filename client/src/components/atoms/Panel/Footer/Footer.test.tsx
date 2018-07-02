import { shallow } from 'enzyme';
import * as React from 'react';

import { Footer } from './Footer';
import { Wrapper } from './Footer.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <Footer {...props} {...customProps} />
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

it('passes children', () => {
  const component = getComponent({ children: <div>Example</div> });

  expect(component.contains('Example')).toBeTruthy();
});
