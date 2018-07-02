import { shallow } from 'enzyme';
import * as React from 'react';

import { Decorator } from './Decorator';

const getComponent = (customProps = {}) => {
  const props = {
    children: <div />,
  };
  const jsx = (
    <Decorator {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('passes down children when provided', () => {
  const component = getComponent({ children: <div /> });

  expect(component.find('div').length).toBe(1);
});

it('passes down className to children when provided', () => {
  const component = getComponent({ children: <div />, className: 'test' });

  expect(component.find('div').prop('className')).toEqual('test');
});

it('merges class names contained by children and passed as a prop', () => {
  const component = getComponent({ children: <div className="rest" />, className: 'test' });

  expect(component.find('div').prop('className')).toEqual('test rest');
});
