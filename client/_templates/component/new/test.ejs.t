---
to: src/components/<%= scope %>/<%= name %>/<%= name %>.test.tsx
---
import { shallow } from 'enzyme';
import * as React from 'react';

import { <%= name %> } from './<%= name %>';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <<%= name %> {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});
