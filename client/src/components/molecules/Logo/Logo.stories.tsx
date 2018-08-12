import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Logo } from './Logo';

storiesOf('Molecules/Logo', module)
  .add('default', () => (
    <Router>
      <Logo />
    </Router>
  ));
