import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Button } from './Button';

storiesOf('Atoms/Button', module)
  .add('primary', () => (
    <Button primary={true}>Primary button</Button>
  ))
  .add('secondary', () => (
    <Button>Secondary button</Button>
  ))
  .add('small primary', () => (
    <Button primary={true} small={true}>Small primary button</Button>
  ))
  .add('small secondary', () => (
    <Button small={true}>Small primary button</Button>
  ));
