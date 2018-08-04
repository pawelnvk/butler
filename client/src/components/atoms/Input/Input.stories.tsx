import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Input } from './Input';

const noop = () => null;

storiesOf('Atoms/Input', module)
  .add('default', () => (
    <Input name="name" onChange={noop} />
  ))
  .add('textarea', () => (
    <Input name="name" onChange={noop} textarea={true} />
  ));
