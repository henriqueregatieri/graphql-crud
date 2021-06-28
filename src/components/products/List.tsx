import { ProductsConnector } from '../../connectors/graphql/products';
import { ProductType } from '../../types/Product';
import { StyledListTable } from '../default/listTable';

export const ProductsList: React.FC = () => {
  const { useGetAll } = ProductsConnector();
  const { data, error, loading } = useGetAll();

  const ProductsList = (
    <StyledListTable>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {data?.Products.map((product: ProductType, key: number) => {
        return (
          <tr key={key}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        );
      })}
    </StyledListTable>
  );

  return (
    <div>
      <h1>Products List</h1>
      {loading && <div>Loading</div>}
      {error && <div>Error: {error}</div>}
      {data && ProductsList}
    </div>
  );
};
