import {
  useMutation,
  MutationTuple,
  OperationVariables,
  useQuery,
} from '@apollo/client';

import { ProductOperators } from './operators';
import { ProductType } from '../../../types/Product';

export const ProductsConnector = () => {
  const useGetAll = () => {
    return useQuery(ProductOperators.getAll);
  };

  const useGetById = (id: number) => {
    return useQuery(ProductOperators.getById, {
      variables: { id },
    });
  };

  const useCreate = (product: ProductType) => {
    const [createMutation]: MutationTuple<Function, OperationVariables> =
      useMutation(ProductOperators.create, {
        refetchQueries: [{ query: ProductOperators.getAll }],
      });

    return createMutation({
      variables: product,
    });
  };

  const useUpdate = (product: ProductType) => {
    const [updateMutation] = useMutation(ProductOperators.update, {
      refetchQueries: [{ query: ProductOperators.getAll }],
    });

    return updateMutation({ variables: product });
  };

  const useRemove = (product: ProductType) => {
    const [removeMutation] = useMutation(ProductOperators.remove, {
      refetchQueries: [{ query: ProductOperators.getAll }],
    });

    return removeMutation({
      variables: {
        id: product.id,
      },
    });
  };

  return {
    useGetAll,
    useGetById,
    useCreate,
    useUpdate,
    useRemove,
  };
};
