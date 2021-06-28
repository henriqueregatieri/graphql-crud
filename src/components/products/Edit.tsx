import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ProductsConnector } from '../../connectors/graphql/products';
import { useForm } from '../../hooks/useForm';
import { productFields, productInitialState } from '../../types/Product';
import { FormContent } from '../default/FormContent';

interface UrlParams {
  id: string;
}

export const ProductEdit: React.FC = () => {
  const history = useHistory();
  const { useGetById, update } = ProductsConnector();
  const { id } = useParams<UrlParams>();
  const { product, error, loading } = useGetById(id);

  const goToList = () => {
    history.push('/products');
  };

  const submitAction = () => {
    update(formState);
    goToList();
  };

  const { formState, setFormState, handleChange, handleSubmit } = useForm(
    productInitialState,
    submitAction
  );

  let Form = FormContent({
    handleSubmit,
    handleChange,
    goToList,
    formState,
    fields: productFields,
  });

  useEffect(() => {
    product && setFormState(product);
  }, [product, setFormState]);

  return (
    <>
      <h1>Product Edit</h1>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {product && Form}
    </>
  );
};
