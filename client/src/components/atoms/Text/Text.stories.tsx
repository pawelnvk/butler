import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Text } from './Text';
import { COLOR_DANGER, COLOR_SUCCESS } from './Text.constants';

storiesOf('Atoms/Text', module)
  .add('paragraph', () => (
      <Text>This is example text</Text>
  ))
  .add('span', () => (
      <Text inline={true}>This is example text</Text>
  ))
  .add('caption', () => (
      <Text small={true}>This is example caption</Text>
  ))
  .add('caption danger', () => (
      <Text color={COLOR_DANGER} small={true}>This is example caption</Text>
  ))
  .add('caption success', () => (
      <Text color={COLOR_SUCCESS} small={true}>This is example caption</Text>
  ));
