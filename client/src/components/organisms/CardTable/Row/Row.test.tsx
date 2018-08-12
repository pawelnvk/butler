import { shallow } from 'enzyme';
import * as React from 'react';

import { Cell } from '../Cell';
import { Row } from './Row';

const getComponent = (customProps = {}) => {
  const children = (
    <Row>
      <Cell>Example</Cell>
    </Row>
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

it('contains table row', () => {
  const component = getComponent();

  expect(component.is('tr')).toBeTruthy();
});

it('renders only table cell as direct descendant', () => {
  const jsx = (
    <Row>
      <Cell>Example</Cell>
      <div>Another example</div>
    </Row>
  );
  const component = shallow(jsx);

  const children = component.children();
  expect(children.at(0).is(Cell)).toBeTruthy();
  expect(children.length).toEqual(1);
});
