import React from 'react';
import { DefaultRoutes } from './routes/DefaultRoutes';
import { ProductsRoutes } from './routes/ProductsRoutes';

const App: React.FC = () => {
  return (
    <div className="App">
      <DefaultRoutes />
      <ProductsRoutes />
    </div>
  );
};

export default App;
