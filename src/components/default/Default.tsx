import { Link } from 'react-router-dom';

export const Default: React.FC = () => {
  return (
    <>
      <h1>My App</h1>
      <Link to="/products">Products</Link>
    </>
  );
};
