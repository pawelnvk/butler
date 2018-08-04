import { shallow } from 'enzyme';
import * as React from 'react';

import { State } from './State';

const getComponent = (customProps = {}) => {
  const props = {
    children: () => null,
  };
  const jsx = (
    <State {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('renders passed children function', () => {
  const component = getComponent({ children: () => <div>Example</div> });

  expect(component.contains('Example')).toBeTruthy();
});

it('passes state to children function', () => {
  const children = jest.fn();
  const expected = expect.objectContaining({
    state: expect.any(Object),
  });

  getComponent({ children });

  expect(children).toBeCalledWith(expected);
});

it('passes set method to children function', () => {
  const children = jest.fn();

  const instance = getComponent({ children }).instance() as State;

  const expected = expect.objectContaining({ set: instance.set });
  expect(children).toBeCalledWith(expected);
});

it('sets state when set method called', () => {
  const instance = getComponent().instance() as State;

  instance.set({ example: 'value' });

  expect(instance.state).toEqual({ example: 'value' });
});

it('sets initial value of state when passed initial prop', () => {
  const initial = { example: 'value' };

  const component = getComponent({ initial });

  expect(component.state()).toEqual({ example: 'value' });
});
