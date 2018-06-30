import { shallow } from 'enzyme';
import * as React from 'react';

import { Text } from 'src/components/atoms/Text';

import { List } from './List';
import {
  OrderedList,
  OrderedListItem,
  UnorderedList,
  UnorderedListItem
} from './List.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: [<React.Fragment key="1">Example</React.Fragment>],
  };
  const jsx = (
    <List {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is unorderd list by default', () => {
  const component = getComponent();

  expect(component.is(UnorderedList)).toBeTruthy();
});

it('is orderd list if provided type prop', () => {
  const component = getComponent({ ordered: true });

  expect(component.is(OrderedList)).toBeTruthy();
});

it('displays passed content as unordered list elements as default', () => {
  const children = [
    <React.Fragment key="1">List item 1</React.Fragment>,
    <React.Fragment key="2">List item 2</React.Fragment>
  ];

  const component = getComponent({ children });

  expect(component.children(UnorderedListItem).length).toEqual(2);
});

it('displays passed content as ordered list elements if provided type prop', () => {
  const children = [
    <React.Fragment key="1">List item 1</React.Fragment>,
    <React.Fragment key="2">List item 2</React.Fragment>
  ];

  const component = getComponent({ children, ordered: true });

  expect(component.children(OrderedListItem).length).toEqual(2);
});

it('adds key prop to list elements', () => {
  const children = [
    <React.Fragment key="1">List item 1</React.Fragment>,
    <React.Fragment key="2">List item 2</React.Fragment>
  ];

  const component = getComponent({ children });

  expect(component.find(UnorderedListItem).at(0).key()).toEqual('1');
  expect(component.find(UnorderedListItem).at(1).key()).toEqual('2');
});

it('uses Text component in list item', () => {
  const children = [
    <React.Fragment key="1">List item 1</React.Fragment>,
  ];

  const component = getComponent({ children });

  expect(component.children(UnorderedListItem).children().is(Text)).toBeTruthy();
});

it('sets className when provided', () => {
  const children = [
    <React.Fragment key="1">List item 1</React.Fragment>,
  ];

  const component = getComponent({ children, className: 'test-class' });

  expect(component.is('.test-class')).toBeTruthy();
});
