import React from 'react';
import { DefaultRoutes } from './routes/default';
import { ProductsRoutes } from './routes/products';

const App: React.FC = () => {
  return (
    <div className="container">
      <DefaultRoutes />
      <ProductsRoutes />
    </div>
  );
};

export default App;
