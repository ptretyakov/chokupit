import React from 'react';
import {Route} from 'react-router';

// Components
import ProductsContainer from './products.container';

// Routes
import ProductsAddRoutes from './products-add/products-add.routes';
import ProductsCategoriesRoutes from './products-categories/products-categories.routes';

export default (
    <Route>
        <Route path={ProductsContainer.path} component={ProductsContainer} />
        {ProductsCategoriesRoutes}
        {ProductsAddRoutes}
    </Route>
);
