import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from 'src/components/templates/Layout';
import { DishesListing } from 'src/components/views/DishesListing';
import { ProductCreation } from 'src/components/views/ProductCreation';
import { ProductsListing } from 'src/components/views/ProductsListing';
import {
  getDishDetailsPath,
  getDishesListPath,
  getHomePagePath,
  getProductCreationPath,
  getProductsListPath,
} from 'src/constants/paths';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path={getDishDetailsPath()} component={() => <div>Details</div>} />
        <Route path={getDishesListPath()} component={DishesListing} />
        <Route path={getProductsListPath()} component={ProductsListing} />
        <Route path={getProductCreationPath()} component={ProductCreation} />
        <Redirect from={getHomePagePath()} to={getDishesListPath()} />
      </Switch>
    </Layout>
  </Router>
);

export { App };
