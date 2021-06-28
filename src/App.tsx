import React from 'react';
import { Container } from './components/styled/Container';
import { DefaultRoutes } from './routes/default';
import { ProductsRoutes } from './routes/products';

const App: React.FC = () => {
  return (
    <Container className="container">
      <DefaultRoutes />
      <ProductsRoutes />
    </Container>
  );
};

export default App;
