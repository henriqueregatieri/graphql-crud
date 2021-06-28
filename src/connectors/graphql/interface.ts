import { FetchResult } from '@apollo/client';

export interface ConnectorMethods<AllData, SingleItemData, Type> {
  useGetAll: () => AllData;
  useGetById: (id: string) => SingleItemData;
  create: (product: Type) => Promise<FetchResult<Type>>;
  update: (product: Type) => Promise<FetchResult<Type>>;
  remove: (product: Type) => Promise<FetchResult<Type>>;
}
