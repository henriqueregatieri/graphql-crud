import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { ProductOperators } from './operators';
import { ProductData } from '../../../types/Product';

import { ConnectorMethods } from '../interface';

interface AllData {
  products: ProductData[];
  error: ApolloError | undefined;
  loading: boolean;
}

interface SingleItemData {
  product: ProductData;
  error: ApolloError | undefined;
  loading: boolean;
}

export const ProductsConnector = (): ConnectorMethods<
  AllData,
  SingleItemData,
  ProductData
> => {
  const useGetAll = (): AllData => {
    const { data, error, loading } = useQuery(ProductOperators.getAll);
    const products = data?.Products || [];
    return { products, error, loading };
  };

  const useGetById = (id: string): SingleItemData => {
    const { data, error, loading } = useQuery(ProductOperators.getById, {
      variables: { id: parseInt(id) },
    });
    const product = data?.Product;
    return { product, error, loading };
  };

  const [createMutation] = useMutation<ProductData>(ProductOperators.create, {
    refetchQueries: [{ query: ProductOperators.getAll }],
  });

  const create = (product: ProductData) => {
    return createMutation({
      variables: product,
    });
  };

  const [updateMutation] = useMutation<ProductData>(ProductOperators.update, {
    refetchQueries: [{ query: ProductOperators.getAll }],
  });

  const update = (product: ProductData) => {
    updateMutation({ variables: product });
    return updateMutation({ variables: product });
  };

  const [removeMutation] = useMutation<ProductData>(ProductOperators.remove, {
    refetchQueries: [{ query: ProductOperators.getAll }],
  });

  const remove = (product: ProductData) => {
    removeMutation({ variables: product });
    return removeMutation({
      variables: {
        id: product.id,
      },
    });
  };

  return {
    useGetAll,
    useGetById,
    create,
    update,
    remove,
  };
};
