import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { DishesListing } from './DishesListing';

storiesOf('Views/DishesListing', module)
  .add('example', () => (
    <DishesListing />
  ));
