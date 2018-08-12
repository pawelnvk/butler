import { shallow } from 'enzyme';
import * as React from 'react';

import { Cell } from '../Cell';
import { Row } from './Row';
import { Row as StyledRow } from './Row.styled';

const getComponent = (customProps = {}) => {
  const children = (
    <Cell key="1">Example</Cell>
  );
  const props = { children };
  const jsx = (
    <Row {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('contains styled table row', () => {
  const component = getComponent();

  expect(component.is(StyledRow)).toBeTruthy();
});

it('renders all elements as direct descendant', () => {
  const jsx = (
    <Row>
      <Cell key="1">Example</Cell>
      <div key="2">Another example</div>
    </Row>
  );
  const component = shallow(jsx);

  const children = component.children();
  expect(children.at(0).is(Cell)).toBeTruthy();
  expect(children.at(1).is('div')).toBeTruthy();
  expect(children.length).toEqual(2);
});
