import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Header';

storiesOf('Organisms/Header', module)
  .add('default', () => (
    <Router>
      <Header />
    </Router>
  ));
