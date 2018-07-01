import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Cell } from './Cell';
import { Row } from './Row';
import { Table } from './Table';

storiesOf('Table', module)
  .add('default', () => (
    <Table>
      <Row key="1">
        <Cell key="1">Row 1, col 1</Cell>
        <Cell key="2">Row 1, col 2</Cell>
      </Row>
      <Row key="2">
        <Cell key="1">Row 2, col 1</Cell>
        <Cell key="2">Row 2, col 2</Cell>
      </Row>
    </Table>
  ));
