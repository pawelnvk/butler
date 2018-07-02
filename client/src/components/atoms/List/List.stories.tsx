import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { List } from './List';

storiesOf('Atoms/List', module)
  .add('unordered', () => (
    <List>
      <React.Fragment key="1">List item 1</React.Fragment>
      <React.Fragment key="2">List item 2</React.Fragment>
    </List>
  ))
  .add('ordered', () => (
    <List ordered={true}>
      <React.Fragment key="1">List item 1</React.Fragment>
      <React.Fragment key="2">List item 2</React.Fragment>
    </List>
  ));
