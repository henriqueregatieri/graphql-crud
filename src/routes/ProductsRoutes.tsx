import { Route } from 'react-router';
import { ProductsList } from '../components/products/List';

export const ProductsRoutes = () => {
  return (
    <>
      <Route path="/products" exact component={ProductsList} />
    </>
  );
};
