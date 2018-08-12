import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { DishCreation } from './DishCreation';

storiesOf('Views/DishCreation', module)
  .add('example', () => (
    <DishCreation />
  ));
