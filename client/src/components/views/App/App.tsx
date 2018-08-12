import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Layout } from 'src/components/templates/Layout';
import { ProductsListing } from 'src/components/views/ProductsListing';

const App = () => (
    <Router>
      <Layout>
        <Route path="/products" component={ProductsListing} />
      </Layout>
    </Router>
);

export { App };
