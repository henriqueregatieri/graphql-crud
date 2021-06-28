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
    query ($id: ID!) {
      Product(id: $id) {
        id
        name
        description
      }
    }
  `;

  static create: DocumentNode = gql`
    mutation ($name: String, $email: String, $job_title: String) {
      createProduct(name: $name, description: $description)
    }
  `;

  static update: DocumentNode = gql`
    mutation ($id: Int, $name: String, $email: String, $job_title: String) {
      updateProduct(id: $id, name: $name, description: $description)
    }
  `;

  static remove: DocumentNode = gql`
    mutation ($id: Int) {
      deleteProduct(id: $id)
    }
  `;
}
