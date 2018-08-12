import { shallow } from 'enzyme';
import * as React from 'react';

import { DishDetails } from './DishDetails';

const getComponent = (customProps = {}) => {
  const props = {
    children: <div>Example</div>,
    match: {
      isExact: false,
      params: {
        id: '1',
      },
      path: '/path',
      url: '/url',
    },
  };
  const jsx = (
    <DishDetails {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});
