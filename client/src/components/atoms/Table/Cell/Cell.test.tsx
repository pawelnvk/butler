import { shallow } from 'enzyme';
import * as React from 'react';

import { Cell } from './Cell';
import { Cell as StyledCell } from './Cell.styled';

const getComponent = (customProps = {}) => {
  const props = { children: <td>Example</td> };
  const jsx = (
    <Cell {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('contains table row', () => {
  const component = getComponent();

  expect(component.is(StyledCell)).toBeTruthy();
});

it('renders passed content', () => {
  const component = getComponent({ children: 'Example' });

  expect(component.contains('Example')).toBeTruthy();
});
