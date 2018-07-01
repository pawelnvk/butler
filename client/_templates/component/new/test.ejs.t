---
to: src/components/<%= scope %>/<%= name %>/<%= name %>.test.tsx
---
import { shallow } from 'enzyme';
import * as React from 'react';

import { <%= name %> } from './<%= name %>';

it('renders without crashing', () => {
  const component = shallow(<<%= name %> />);

  expect(component.length).toBe(1);
});
