import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './Layout';

storiesOf('Templates/Layout', module)
  .add('example', () => (
    <Router>
      <Layout>Text</Layout>
    </Router>
  ));
