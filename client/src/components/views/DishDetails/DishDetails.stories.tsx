import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { DishDetails } from './DishDetails';

storiesOf('Views/DishDetails', module)
  .add('example', () => (
    <DishDetails />
  ));
