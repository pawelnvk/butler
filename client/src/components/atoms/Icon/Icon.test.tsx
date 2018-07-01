import { shallow } from 'enzyme';
import * as React from 'react';

import { Icon } from './Icon';
import { DRAGGABLE_ICON } from './Icon.constants';

jest.mock('!url-loader!src/assets/svg/draggable.svg', () => ({ default: 'draggableIcon' }));

const getComponent = (customProps = {}) => {
  const props = {
    icon: DRAGGABLE_ICON,
  };
  const jsx = (
    <Icon {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('renders as img', () => {
  const component = getComponent();

  expect(component.is('img')).toBeTruthy();
});

it('contains an empty alt attribute by default', () => {
  const component = getComponent();

  expect(component.prop('alt')).toEqual('');
});

it('sets alt attribute when provided', () => {
  const component = getComponent({ alt: 'Example' });

  expect(component.prop('alt')).toEqual('Example');
});

it('sets src attribute when icon name provided', () => {
  const component = getComponent({ icon: DRAGGABLE_ICON });

  expect(component.prop('src')).toBeDefined();
});

it('sets className when provided', () => {
  const children = [
    <React.Fragment key="1">List item 1</React.Fragment>,
  ];

  const component = getComponent({ children, className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});
