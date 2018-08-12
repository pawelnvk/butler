import { shallow } from 'enzyme';
import * as React from 'react';

import { Icon, LOGO_ICON } from 'src/components/atoms/Icon';
import { getHomePagePath } from 'src/constants/paths';

import { Logo } from './Logo';
import { LogoLink } from './Logo.styled';

const getComponent = (customProps = {}) => {
  const props = {
    children: null,
  };
  const jsx = (
    <Logo {...props} {...customProps} />
  );

  return shallow(jsx);
};

it('renders without crashing', () => {
  const component = getComponent();

  expect(component.length).toBe(1);
});

it('contains logo icon', () => {
  const component = getComponent();

  const image = component.find(Icon);
  expect(image.length).toBe(1);
  expect(image.prop('icon')).toEqual(LOGO_ICON);
  expect(image.prop('alt')).toEqual('Butler');
});

it('contains "Butler" text', () => {
  const component = getComponent();

  expect(component.contains('Butler')).toBeTruthy();
});

it('contains link to homepage', () => {
  const component = getComponent();

  const link = component.find(LogoLink);
  expect(link.length).toEqual(1);
  expect(link.prop('to')).toEqual(getHomePagePath());
});
