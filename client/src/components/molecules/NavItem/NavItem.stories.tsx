import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavItem } from './NavItem';

storiesOf('Molecules/NavItem', module)
  .add('default', () => (
    <Router>
      <NavItem to="/">Nav item</NavItem>
    </Router>
  ));
