import { shallow } from 'enzyme';
import * as React from 'react';

import { Container } from './Container';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <Container {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});
