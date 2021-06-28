import { Route } from 'react-router-dom';
import { Default } from '../components/default/Default';

export const DefaultRoutes = () => {
  return (
    <>
      <Route path="/" exact component={Default} />{' '}
    </>
  );
};
