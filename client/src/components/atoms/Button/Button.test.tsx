import { shallow } from 'enzyme';
import * as React from 'react';

import { Button } from './Button';
import {
  Button as StyledButton,
  Link as StyledLink,
} from './Button.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <Button {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is button by default', () => {
  const component = getComponent();

  expect(component.is(StyledButton)).toBeTruthy();
});

it('is Link when provided to param', () => {
  const component = getComponent({ to: '/' });

  expect(component.is(StyledLink)).toBeTruthy();
});

it('renders passed content', () => {
  const component = getComponent({ children: 'Example' });

  expect(component.contains('Example')).toBeTruthy();
});

it('sets className when provided', () => {
  const component = getComponent({ className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});

it('triggers passed onClick event when button is clicked', () => {
  const onClick = jest.fn();
  const component = getComponent({ onClick });

  component.simulate('click');

  expect(onClick).toBeCalled();
});

it('passes primary prop when provided', () => {
  const component = getComponent({ primary: true });

  expect(component.prop('primary')).toEqual(true);
});

it('passes small prop when provided', () => {
  const component = getComponent({ small: true });

  expect(component.prop('small')).toEqual(true);
});
