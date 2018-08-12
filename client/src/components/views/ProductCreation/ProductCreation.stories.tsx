import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ProductCreation } from './ProductCreation';

storiesOf('Views/ProductCreation', module)
  .add('example', () => (
    <ProductCreation />
  ));
