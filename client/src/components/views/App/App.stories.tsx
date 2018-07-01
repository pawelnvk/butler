import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { App } from './App';

storiesOf('Views/App', module)
  .add('example', () => (
    <App />
  ));
