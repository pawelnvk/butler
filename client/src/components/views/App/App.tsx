import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from 'src/components/templates/Layout';
import { ProductCreation } from 'src/components/views/ProductCreation';
import { ProductsListing } from 'src/components/views/ProductsListing';
import { getProductCreationPath, getProductsListPath } from 'src/constants/paths';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path={getProductsListPath()} component={ProductsListing} />
        <Route path={getProductCreationPath()} component={ProductCreation} />
      </Switch>
    </Layout>
  </Router>
);

export { App };
