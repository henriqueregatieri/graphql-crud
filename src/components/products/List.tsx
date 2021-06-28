import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { ProductsConnector } from '../../connectors/graphql/products';
import { productFields } from '../../types/Product';
import { Field } from '../../types/Field';
import { Button } from '../styled/Button';
import { Anchor } from '../styled/Anchor';
import { ListTable } from '../styled/ListTable';

export const ProductsList: React.FC = () => {
  const { useGetAll, remove } = ProductsConnector();
  const { products, error, loading } = useGetAll();
  const history = useHistory();

  const goToNewProduct = () => {
    history.push('/products/new');
  };

  const deleteAction = (id: number) => {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this record?',
      icon: 'warning',
      buttons: ['No', 'Yes'],
      dangerMode: true,
    }).then((response) => {
      if (response) {
        remove(id);
        swal('Deleted!', 'You record has been deleted!', 'success');
      }
    });
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
              <td>
                <Anchor
                  className="delete"
                  onClick={() => deleteAction(data.id)}
                >
                  Delete
                </Anchor>
              </td>
            </tr>
          );
        })}
      </tbody>
    </ListTable>
  );

  return (
    <div>
      <h1>Products List</h1>
      <Button className="mb-20" onClick={goToNewProduct}>
        New
      </Button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {products.length > 0 && ProductsList}
    </div>
  );
};
