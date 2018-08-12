import { shallow } from 'enzyme';
import * as React from 'react';

import { NavItem } from './NavItem';
import { Link } from './NavItem.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: 'Link',
    to: '/',
  };
  const jsx = (
    <NavItem {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('contains link with passed to param', () => {
  const component = getComponent({ to: '/path' });

  const link = component.find(Link);
  expect(link.length).toEqual(1);
  expect(link.prop('to')).toEqual('/path');
});

it('passes children', () => {
  const component = getComponent({ children: 'Text of texts' });

  expect(component.find(Link).contains('Text of texts')).toBeTruthy();
});
