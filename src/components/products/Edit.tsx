import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ProductsConnector } from '../../connectors/graphql/products';
import { useForm } from '../../hooks/useForm';
import { productInitialState } from '../../types/Product';
import { Form } from '../default/Form';

interface UrlParams {
  id: string;
}

export const ProductEdit = () => {
  const history = useHistory();
  const { useGetById, update } = ProductsConnector();
  const { id } = useParams<UrlParams>();
  const { product, error, loading } = useGetById(id);

  const submitAction = () => {
    update(formState);
    goToProductList();
  };

  const { formState, setFormState, handleChange, handleSubmit } = useForm(
    productInitialState,
    submitAction
  );

  useEffect(() => {
    product && setFormState(product);
  }, [product, setFormState]);

  const goToProductList = () => {
    history.push('/products');
  };

  const ProductForm = (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          className="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Description:</label>
        <input
          className="text"
          name="description"
          value={formState.description}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <input className="button" type="submit"></input>
        <button className="button" onClick={goToProductList}>
          Cancel
        </button>
      </div>
    </Form>
  );

  return (
    <>
      <h1>Product Edit</h1>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {product && ProductForm}
    </>
  );
};
