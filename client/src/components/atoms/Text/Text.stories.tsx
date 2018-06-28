import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Text } from './Text';

storiesOf('Text', module)
  .add('default', () => (
    <React.Fragment>
      <Text>This is example text</Text>
      <Text inline={true}>This is example text</Text>
    </React.Fragment>
  ));

