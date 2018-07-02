import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Loader } from './Loader';

storiesOf('Atoms/Loader', module)
  .add('default', () => (
    <Loader />
  ));
