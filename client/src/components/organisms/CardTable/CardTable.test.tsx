import { shallow } from 'enzyme';
import * as React from 'react';

import { CardTable } from './CardTable';
import { CardTable as StyledCardTable } from './CardTable.styled';
import { Row } from './Row';

const getComponent = (customProps = {}) => {
  const jsx = (
    <CardTable {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('contains table', () => {
  const component = getComponent();

  expect(component.is(StyledCardTable)).toBeTruthy();
});

it('contains table body tab', () => {
  const component = getComponent();

  expect(component.children('tbody').length).toBeTruthy();
});

it('renders only table row as direct descendant inside table body', () => {
  const jsx = (
    <CardTable>
      <Row>
        <td>Example</td>
      </Row>
      <div>Another example</div>
    </CardTable>
  );
  const component = shallow(jsx);

  const children = component.children('tbody').children();
  expect(children.at(0).is(Row)).toBeTruthy();
  expect(children.length).toEqual(1);
});

it('sets className when provided', () => {
  const component = getComponent({ className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});
