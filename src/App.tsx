import React from 'react';
import { StyledContainer } from './components/default/container';
import { DefaultRoutes } from './routes/default';
import { ProductsRoutes } from './routes/products';

const App: React.FC = () => {
  return (
    <StyledContainer className="container">
      <DefaultRoutes />
      <ProductsRoutes />
    </StyledContainer>
  );
};

export default App;
