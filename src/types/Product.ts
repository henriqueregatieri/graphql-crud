import { Field } from './Field';

export type ProductData = {
  id?: number;
  name: string;
  description: string;
};

export const productInitialState: ProductData = {
  name: '',
  description: '',
};

export const productFields: Field[] = [
  {
    name: 'Name',
    slug: 'name',
  },
  {
    name: 'Description',
    slug: 'description',
  },
];
