import { Route } from 'react-router-dom';
import { Default } from '../components/default/index';

export const DefaultRoutes = () => {
  return (
    <>
      <Route path="/" exact component={Default} />{' '}
    </>
  );
};
