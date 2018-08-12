import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ProductsListing } from './ProductsListing';

storiesOf('Views/ProductsListing', module)
  .add('example', () => (
    <ProductsListing />
  ));
