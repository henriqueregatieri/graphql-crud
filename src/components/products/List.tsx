import { Link } from 'react-router-dom';
import { ProductsConnector } from '../../connectors/graphql/products';
import { ProductData } from '../../types/Product';
import { ListTable } from '../styled/ListTable';

export const ProductsList: React.FC = () => {
  const { useGetAll } = ProductsConnector();
  const { products, error, loading } = useGetAll();

  const ProductsList = (
    <ListTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: ProductData, key: number) => {
          return (
            <tr key={key}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`/products/${product.id}/edit`}>Edit</Link>
              </td>
              <td>Delete</td>
            </tr>
          );
        })}
      </tbody>
    </ListTable>
  );

  return (
    <div>
      <h1>Products List</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {products && ProductsList}
    </div>
  );
};
