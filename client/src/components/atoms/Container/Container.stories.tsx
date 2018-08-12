import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Container } from './Container';

storiesOf('Atoms/Container', module)
  .add('example', () => (
    <Container />
  ));
