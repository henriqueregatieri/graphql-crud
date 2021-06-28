import { DocumentNode, gql } from '@apollo/client';

export class ProductOperators {
  static getAll: DocumentNode = gql`
    {
      Products {
        id
        name
        description
      }
    }
  `;

  static getById: DocumentNode = gql`
    query ($id: Int!) {
      Product(id: $id) {
        id
        name
        description
      }
    }
  `;

  static create: DocumentNode = gql`
    mutation ($name: String, $description: String) {
      createProduct(name: $name, description: $description)
    }
  `;

  static update: DocumentNode = gql`
    mutation ($id: Int!, $name: String!, $description: String!) {
      updateProduct(id: $id, name: $name, description: $description)
    }
  `;

  static remove: DocumentNode = gql`
    mutation ($id: Int) {
      deleteProduct(id: $id)
    }
  `;
}
