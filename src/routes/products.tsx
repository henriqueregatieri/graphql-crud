import { Route } from 'react-router';
import { ProductNew } from '../components/products/New';
import { ProductEdit } from '../components/products/Edit';
import { ProductsList } from '../components/products/List';

export const ProductsRoutes = () => {
  return (
    <>
      <Route path="/products" exact component={ProductsList} />
      <Route path="/products/new" exact component={ProductNew} />
      <Route path="/products/:id/edit" exact component={ProductEdit} />
    </>
  );
};
