import { shallow } from 'enzyme';
import * as React from 'react';

import { Input } from './Input';
import {
  Input as StyledInput,
  Textarea,
} from './Input.styled';

const getComponent = (customProps = {}) => {
  const props = {
    name: 'Example',
    onChange: jest.fn(),
  };
  const jsx = (
    <Input {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('is input', () => {
  const component = getComponent();

  expect(component.is(StyledInput)).toBeTruthy();
});

it('passes down value', () => {
  const component = getComponent({ value: 'Example' });

  expect(component.find(StyledInput).prop('value')).toEqual('Example');
});

it('sets name on input when it is passed as prop', () => {
  const component = getComponent({ name: 'Example' });

  expect(component.find(StyledInput).prop('name')).toEqual('Example');
});

it('calls onChange when input changes', () => {
  const onChange = jest.fn();
  const component = getComponent({ onChange });

  component.find(StyledInput).simulate('change', { target: { value: 'Example' } });

  expect(onChange).toBeCalledWith({ target: { value: 'Example' } });
});

it('is textarea when textarea prop is true', () => {
  const component = getComponent({ textarea: true });

  expect(component.is(Textarea)).toBeTruthy();
});
