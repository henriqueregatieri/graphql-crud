import { Route } from 'react-router';
import { ProductEdit } from '../components/products/Edit';
import { ProductsList } from '../components/products/List';

export const ProductsRoutes = () => {
  return (
    <>
      <Route path="/products" exact component={ProductsList} />
      <Route path="/products/:id/edit" exact component={ProductEdit} />
    </>
  );
};
