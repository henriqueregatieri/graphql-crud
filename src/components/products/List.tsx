import { Link, useHistory } from 'react-router-dom';
import { ProductsConnector } from '../../connectors/graphql/products';
import { productFields } from '../../types/Product';
import { Button } from '../styled/Button';
import { ListTable } from '../styled/ListTable';
import { Field } from '../../types/Field';

export const ProductsList: React.FC = () => {
  const { useGetAll } = ProductsConnector();
  const { products, error, loading } = useGetAll();
  const history = useHistory();

  const goToNewProduct = () => {
    history.push('/products/new');
  };

  const ProductsList = (
    <ListTable>
      <thead>
        <tr>
          {productFields.map((field: Field, key: number) => {
            return <th key={key}>{field.name}</th>;
          })}
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((data: any, key: number) => {
          return (
            <tr key={key}>
              {productFields.map((field: Field, key: number) => {
                return <td key={key}>{data[field.slug]}</td>;
              })}
              <td>
                <Link to={`/products/${data.id}/edit`}>Edit</Link>
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
      <Button onClick={goToNewProduct}>New</Button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {products && ProductsList}
    </div>
  );
};
