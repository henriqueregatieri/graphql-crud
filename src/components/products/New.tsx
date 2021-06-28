import { useHistory } from 'react-router-dom';
import { ProductsConnector } from '../../connectors/graphql/products';
import { useForm } from '../../hooks/useForm';
import { productFields, productInitialState } from '../../types/Product';
import { FormContent } from '../default/FormContent';

export const ProductNew = () => {
  const history = useHistory();
  const { create } = ProductsConnector();

  const goToList = () => {
    history.push('/products');
  };

  const submitAction = () => {
    create(formState);
    goToList();
  };

  const { formState, handleChange, handleSubmit } = useForm(
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

  return (
    <>
      <h1>Product New</h1>
      {Form}
    </>
  );
};
