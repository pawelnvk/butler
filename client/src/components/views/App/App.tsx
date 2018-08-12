import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from 'src/components/templates/Layout';
import { DishCreation } from 'src/components/views/DishCreation';
import { DishDetails } from 'src/components/views/DishDetails';
import { DishesListing } from 'src/components/views/DishesListing';
import { ProductCreation } from 'src/components/views/ProductCreation';
import { ProductsListing } from 'src/components/views/ProductsListing';
import {
  getDishCreationPath,
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
        <Route path={getDishDetailsPath()} component={DishDetails} />
        <Route path={getDishesListPath()} component={DishesListing} />
        <Route path={getDishCreationPath()} component={DishCreation} />
        <Route path={getProductsListPath()} component={ProductsListing} />
        <Route path={getProductCreationPath()} component={ProductCreation} />
        <Redirect exact={true} from={getHomePagePath()} to={getDishesListPath()} />
      </Switch>
    </Layout>
  </Router>
);

export { App };
