import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Badge } from './Badge';
import { COLOR_GRAY } from './Badge.constants';

const onClick = () => null;

storiesOf('Atoms/Badge', module)
  .add('default', () => (
    <Badge>Badge</Badge>
  ))
  .add('clickable', () => (
    <Badge onClick={onClick}>Badge</Badge>
  ))
  .add('gray', () => (
    <Badge color={COLOR_GRAY}>Badge</Badge>
  ));
