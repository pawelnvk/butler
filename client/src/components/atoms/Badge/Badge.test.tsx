import { shallow } from 'enzyme';
import * as React from 'react';

import { Badge } from './Badge';
import { COLOR_GRAY } from './Badge.constants';
import { Badge as StyledBadge } from './Badge.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <Badge {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is button by default', () => {
  const component = getComponent();

  expect(component.is(StyledBadge)).toBeTruthy();
});

it('renders passed content', () => {
  const component = getComponent({ children: 'Example' });

  expect(component.contains('Example')).toBeTruthy();
});

it('sets className when provided', () => {
  const component = getComponent({ className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});

it('triggers passed onClick event when badge is clicked', () => {
  const onClick = jest.fn();
  const component = getComponent({ onClick });

  component.simulate('click');

  expect(onClick).toBeCalled();
});

it('sets color prop on child component to COLOR_GRAY when provided', () => {
  const component = getComponent({ color: COLOR_GRAY });

  expect(component.props().color).toEqual(COLOR_GRAY);
});
