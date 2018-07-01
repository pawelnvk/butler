import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading } from './Heading';

storiesOf('Atoms/Heading', module)
  .add('default', () => (
    <React.Fragment>
      <Heading>Heading 1</Heading>
      <Heading priority={2}>Heading 2</Heading>
      <Heading priority={3}>Heading 3</Heading>
      <Heading priority={4}>Heading 4</Heading>
      <Heading priority={5}>Heading 5</Heading>
      <Heading priority={6}>Heading 6</Heading>
    </React.Fragment>
  ));
